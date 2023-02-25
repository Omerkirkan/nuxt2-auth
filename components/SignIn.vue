<template>
  <div class="auth-box">
    <div class="auth-box__header">
      <h2>Sign In</h2>
    </div>

    <div class="auth-box__body">
      <div class="form-group">
        <input type="text" v-model="email" placeholder="E-Mail" />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <button class="btn btn_primary" @click="signIn">Sign In</button>
      </div>
    </div>

    <div class="auth-box__footer">
      <h3>
        Don't have an account?
        <nuxt-link to="/auth/signup"> Sign Up </nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions({
      signInUser: "authSignIn",
    }),

    signIn() {
      this.signInUser({ email: this.email, password: this.password })
      .then((res) => {
        if (res) {
          this.$router.push('/admin')
        } else {
          alert('Wrong email or password!');
        }
      })
    },
  },
};
</script>
