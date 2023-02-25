<template>
  <div class="auth-box">
    <div class="auth-box__header">
      <h2>Sign Up</h2>
    </div>

    <div class="auth-box__body">
      <div class="form-group">
        <input type="text" v-model="email" placeholder="E-Mail" />
      </div>
      <div class="form-group">
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div class="form-group">
        <button class="btn btn_success" @click="signUp()">Sign Up</button>
      </div>
    </div>

    <div class="auth-box__footer">
      <h3>
        Do you have an account?
        <nuxt-link to="/auth/signin"> Sign In </nuxt-link>
      </h3>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions({
      signUpUser: "authSignUp",
    }),

    signUp() {
      this.signUpUser({ email: this.email, password: this.password }).then(
        (res) => {
          if (res) {
            this.$router.push("/admin");
          } else {
            alert("Something went wrong!");
          }
        }
      );
    },
  },
};
</script>
