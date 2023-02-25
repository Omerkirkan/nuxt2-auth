import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      authToken: null,
    },
    mutations: {
      SET_AUTH_TOKEN(state, value) {
        state.authToken = value;
        Cookie.set("authToken", value);
      },
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {

      //     const cookie = context.req.headers.cookie;
      //     if (cookie) {
      //         const authToken = cookie.split(';').find(c => c.trim().startsWith('authToken='));
      //         if (authToken) {

      //         }
      //     }

      // },

      initAuth(vuexContext, req) {
        let token;

        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          const authToken = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("authToken="));
          if (authToken) {
            token = authToken.split("=")[1];
          }
        } else {
          token = Cookie.get("authToken");
          if (!token) {
            return;
          }
        }

        if (token) {
          vuexContext.commit("SET_AUTH_TOKEN", token); 
        }
      },

      async authSignIn(vuexContext, userInfos) {
        const data = {
            email: userInfos.email,
            password: userInfos.password,
            returnSecureToken: true
        }

       const response = this.$axios.post('accounts:signInWithPassword?key=' + process.env.API_KEY, data)
       .then(res => {
            vuexContext.commit('SET_AUTH_TOKEN', res.data.idToken);
            return true;
        }).catch(err => {
            console.log(err);
            return false;
        });

        return await response;
      },

      async authSignUp(vuexContext, userInfos) {

        const data = {
          email: userInfos.email,
          password: userInfos.password,
          returnSecureToken: true
        };

        const response = this.$axios.post('accounts:signUp?key=' + process.env.API_KEY, data)
        .then(res => {
            vuexContext.commit('SET_AUTH_TOKEN', res.data.idToken);
            return true;

        }).catch((err) => { console.log(err)
            return false;
        });

        return await response;
      },

      authSignOut(vuexContext) {
        vuexContext.commit('SET_AUTH_TOKEN', null);
        Cookie.remove('authToken');

        if (!Cookie.get('authToken')) {
          return true;
        } else {
          return false;
        }

      }

    },
    getters: {
      getAuth(state) {
        return state.authToken != null;
      },
    },
  });
};

export default createStore;
