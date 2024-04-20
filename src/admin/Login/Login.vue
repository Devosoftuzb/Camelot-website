<template>
    <div class="login">
        <div class="login-wrapper">
            <div class="login-logo">
                <img src="../../../public/images/logo.png" alt="">
            </div>
            <form @submit.prevent="loginAdmin">
                <label for="email">
                    <h3>
                        E-mail
                    </h3>
                    <input v-model="login.email" required type="email" name="" id="email">
                </label>
                <label for="password">
                    <h3>
                        Parol
                    </h3>
                    <input v-model="login.password" required type="password" name="" id="password">
                </label>
                <button type="submit">
                    Kirish
                </button>
            </form>
        </div>
    </div>
</template>
<script setup>
import { reactive } from "vue";
import axios from "@/services/axios";
import router from "@/router";

const login = reactive({
  email: "",
  password: "",
});

const loginAdmin = () => {
  const data = {
    email: login.email,
    password: login.password
  };
  axios
    .post("/admins/login", data, {
    })
    .then((res) => {
      console.log(res.data.tokens.refresh_token)
      login.email = "";
      login.password = "";
      localStorage.setItem('token' , res.data.tokens.refresh_token)
      router.push('/admin')
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
        
<style scoped>
.login{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.login-wrapper{
    border: 2px solid #292684;
    border-radius: 30px;
    width: 400px;
    padding: 30px;
}
.login-logo img{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
form input {
    width: 100%;
    border: 2px solid #292684;
    border-radius: 30px;
    padding: 5px 10px;
}
form h3{
    font-weight: bold;
    font-size: 20px;
}
form button{
    background-color: #292684;
    color: white;
    width: 100%;
    margin-top:20px ;
    padding: 10px;
    border-radius: 30px;
    font-weight: bold;
    border: 2px solid #292684;
}
form button:hover{
    background-color: transparent;
    color: black;
}
</style>