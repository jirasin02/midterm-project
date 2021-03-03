<template>
  <div class="main">
    <v-carousel
      :show-arrows="false"
      hide-delimiters
      cycle
      class="background"
      height="820"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <div class="top d-flex flex-row ml-6">
      <v-icon color="#023E8A"> mdi-lightbulb-on</v-icon>
      <p class="ml-3 mt-5">UNTITLED</p>
    </div>
    <div class="bottom d-flex flex-column align-center">
      <div class="signin d-flex flex-column align-center mt-6">
        <p class="mt-8 mb-12 font-weight-medium">Sign In</p>
        <v-form ref="form" v-model="valid">
          <v-container class="d-flex flex-column align-center">
            <div class="input mt-5">
              <v-text-field
                v-model="info.username"
                :rules="usernameRules"
                prepend-inner-icon="mdi-account"
                label="Username"
                outlined
                required
                @keydown.enter="checkIfValidate"
              ></v-text-field>
            </div>
            <div class="input">
              <v-text-field
                v-model="info.password"
                :rules="passwordRules"
                label="Password"
                prepend-inner-icon="mdi-lock"
                outlined
                required
                type="password"
                @keydown.enter="checkIfValidate"
              ></v-text-field>
            </div>
          </v-container>
        </v-form>

        <v-alert type="error" dense v-if="validate" icon="mdi-alert-circle">
          username or password is incorrect
        </v-alert>
        <div class="forget align-self-end">Forgot Password?</div>
        <v-btn
          color="#03045E"
          depressed
          large
          dark
          class="button mt-6"
          @click="checkIfValidate"
        >
          SIGN IN
        </v-btn>
      </div>
      <footer>Copyright &copy; 2021 Lemoningz. All rights reserved.</footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      valid: false,
      info: { username: "", password: "" },
      usernameRules: [(v) => !!v || "Username is required."],
      passwordRules: [(v) => !!v || "Password is required"],
      validate: false,
      infoForCheck: { id: "1", username: "Lemoningz", password: "123" },
      items: [
        {
          src: "background1.jpg",
        },

        {
          src: "background2.webp",
        },
        {
          src: "background3.jpg",
        },
        {
          src: "background4.jpg",
        },
      ],
    };
  },
  methods: {
    checkIfValidate() {
      if (this.info.username == this.infoForCheck.username) {
        if (this.info.password == this.infoForCheck.password) {
          this.$router.push("Dashboard");
        } else {
          this.reset();
          this.validate = true;
        }
      } else {
        this.reset();
        this.validate = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.background {
  position: absolute;
  opacity: 0.1;
}

.top {
  font-size: 24px;
}
.top p {
  font-weight: bold;
}
.bottom {
  display: flex;
  height: auto;
  justify-content: center;
}
.signin {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 40%;
  height: 75vh;
  border-radius: 10px;
  backdrop-filter: blur(4px);
}
.signin p {
  font-size: 90px;
  margin: 0%;
  margin-top: 0%;
  text-align: center;
  color: #28293d;
}
.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.input {
  width: 200%;
  margin-top: 3%;
}
.incorrect {
  color: red;
  font-size: 18px;
}
.forget {
  font-size: 16px;
  color: #aaaaaa;
  margin-right: 10%;
}
.forget:hover {
  color: #5d5d68;
  cursor: pointer;
}
.button {
  width: 80%;
}
footer {
  margin-top: 1%;
  color: #aaaaaa;
}
</style>
