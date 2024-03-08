<script setup>
import { ref } from 'vue';
import { auth } from "@/firebase.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const emits = defineEmits(['hideLogin']);
const loginsignup = ref('login');
const email = ref();
const password = ref();
const name = ref();
const username = ref();

async function login(){
  try{
    await signInWithEmailAndPassword(auth, email.value, password.value);
    emits('hideLogin');
  }catch (e){
    alert(`Ocurrió un error ${e.message}`);
  }
}
async function signup() {
   try {
       // Llamamos a la función de Firebase para crear un usuario
       // Le pasamos nuestra instancia de auth y los valores de email y password
       await createUserWithEmailAndPassword(auth, email.value, password.value);
       // Mostramos un mensaje de éxito
       alert("Cuenta creada con éxito");
       // Emitimos el evento "hide" para ocultar el componente
       emits("hideLogin");
   } catch (error) {
       alert(`Error al crear la cuenta: ${error.message}`);
   }
}
function signUpPage(){
    loginsignup.value = 'signup';
}
function logInPage(){
    loginsignup.value = 'login';
}
</script>

<template>
<div class="login-container">
    <img src="https://s2-g1.glbimg.com/qzPiGecEk_Y9wCGEGY0_lW_rQiI=/0x0:657x735/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/n/i/ogpqa0QUCK3fQzJLCXzg/instagram-fixar-posts.png" alt="">
    <div v-if="loginsignup === 'login'" class="login-signup">
        <div>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="">
            <form @submit.prevent="null">
                <div>
                    <label for="email">Email:</label>
                    <input v-model="email" type="text" name="email">
                </div>
                <div>
                    <label for="password">Constraseña:</label>
                    <input v-model="password" type="text" name="password">
                </div>
                <button @click="login" type="submit">Entrar</button>
            </form>
        </div>
        <div>
            <p>No tienes cuenta? <span @click="signUpPage">Registrate</span></p>
        </div>
    </div>
    <div v-if="loginsignup === 'signup'" class="login-signup">
        <div>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="">
            <form @submit.prevent="null">
                <div>
                    <label for="email">Email:</label>
                    <input v-model="email" type="text" name="email">
                </div>
                <div>
                    <label for="name">Nombre:</label>
                    <input v-model="name" type="text" name="name">
                </div>
                <div>
                    <label for="username">Nombre de usuario:</label>
                    <input v-model="username" type="text" name="username">
                </div>
                <div>
                    <label for="password">Constraseña:</label>
                    <input v-model="password" type="text" name="password">
                </div>
                <button @click="signup" type="submit">Crear cuenta</button>
            </form>
        </div>
        <div>
            <p>Ya tienes cuenta? <span @click="logInPage">Crear cuenta</span></p>
        </div>
    </div>
</div>
</template>

<style scoped>
.login-container{
    display: flex;
    justify-content: center;
    margin: 50px auto;
    width: 70%;
}
.login-container > img{
    margin: 0px 5% 0px 0px;
    width: 30%;
    height: 80%;
}
.login-container > div.login-signup{
    width: 30%;
    height: 45%;
}
.login-container > div.login-signup > div{
    margin: 0px 0px 20px;
    border: 1px solid lightgrey;
}
.login-container > div.login-signup > div > img{
    position: relative;
    left: 15%;
    width: 70%;
    height: 20%;
}
.login-container > div.login-signup > div > form > div{
    display: block;
    position: relative;
    left: 10%;
}
.login-container > div.login-signup > div > form > div > label{
  display: block;
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
}
.login-container > div.login-signup > div > form > div > input{
  display: block;
  width: 80%;
  height: 35px;
  border-radius: 5px;
  border: 1px solid lightgrey;
}
.login-container > div.login-signup > div > form > button{
  display: block;
  position: relative;
    left: 10%;
  width: 80%;
  height: 35px;
  margin: 20px 0px;
  background-color: rgb(101, 187, 240);
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
}
.login-container > div.login-signup > div > p{
    text-align: center;
    padding: 10px;
}
.login-container > div.login-signup > div > p > span{
    color: blue;
    cursor: pointer;
}
</style>