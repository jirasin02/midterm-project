<template>
   <div class="main">
      <div class="top d-flex flex-row ml-6 mt-1">
         <v-icon> mdi-lightbulb-on </v-icon>
         <p class="ml-3 mt-4">UNTITLED</p>
      </div>
      <div class="bottom d-flex flex-column align-center">
         <div class="signin d-flex flex-column align-center">
            <p class="mb-12">Sign In</p>
            <v-form ref="form" v-model="valid">
               <v-container class="d-flex flex-column align-center">
                  <div class="input mt-5">
                     <v-text-field
                        v-model="info.username"
                        :rules="usernameRules"
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
                        outlined
                        required
                        type="password"
                        @keydown.enter="checkIfValidate"
                     ></v-text-field>
                  </div>
               </v-container>
            </v-form>
            <div class="incorrect mb-4" v-if="validate">
               username or password is incorrect
            </div>
            <div class="forget align-self-end">Forget Password?</div>
            <v-btn
               color="#333B55"
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
.main {
   background-color: #f4f9f9;
}
.top {
   font-size: 24px;
}
.top p {
   font-weight: bold;
}
.bottom {
   display: flex;
   height: 90vh;
   justify-content: center;
}
.signin {
   background-color: white;
   width: 40%;
   height: 80%;
   border-radius: 10px;
}
.signin p {
   font-size: 80px;
   margin: 0%;
   margin-top: 5%;
   text-align: center;
   color: #28293d;
}
.container {
   width: 100%;
   margin-right: auto;
   margin-left: auto;
}
.input {
   width: 241%;
   margin-top: 3%;
}
.incorrect {
   color: red;
}
.forget {
   font-size: 14px;
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
