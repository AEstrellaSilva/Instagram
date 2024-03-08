<script setup>
import { auth } from "@/firebase.js";
import { signOut } from 'firebase/auth';

const emits = defineEmits(["changePage"]);

async function logout() {
   try {
       await signOut(auth);
       emits("hideLogin");
   } catch (error) {
       alert(`Error al cerrar sesión: ${error.message}`);
   }
}
</script>

<template>
<div>
    <nav>
        <div>
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png" alt="">
        </div>
        <div>
            <span @click="emits('changePage', 'main-page')">Inicio</span>
            <span @click="emits('changePage', 'profile-page')">Perfil</span>
            <span @click="logout">Cerrar sesión</span>
        </div>
    </nav>
</div>
</template>

<style scoped>
div{
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}
div > nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    height: 70px;
    padding: 10px;
    margin: 0px 0px;
    box-shadow: none;
}
div > nav > div{
    margin: 0px 60px;
    display: flex;
    align-items: center;
    box-shadow: none;
}
div > nav > div > h2{
    margin: 0px 20px;
    font-size: 30px;
    font-weight: 600;
    color: black;

}
div > nav > div > img{
    height: 70px;
    border-bottom-right-radius: 5px;
}
div > nav > div > span{
    margin: 20px;
    color: black;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}
</style>