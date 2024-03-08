<script setup>
import { ref } from "vue";
import { onMounted } from 'vue';
import { firestore, auth } from "@/firebase.js";
import { collection, doc, getDocs } from "firebase/firestore";

import DetailsPage from "./DetailsPage.vue";

import Post from '@/components/Post.vue';

const posts = ref([]);
const emits = defineEmits(['changePage']);

async function getPosts(){
    try {
        // Creamos un query para obtener las reseñas del libro seleccionado
        // Toma como argumentos la colección y las condiciones de filtrado
        const postsQuery = query(
          collection(firestore, "posts"),
        );
        // Obtenemos los documentos de la colección con la función getDocs
        // que toma como argumento una referencia a la colección que queremos obtener
        const postsSnapshot = await getDocs(postsQuery);
        // Iteramos sobre los documentos y los guardamos en la ref de reseñas
        posts.value = postsSnapshot.docs.map((doc) => doc.data());
    } catch (e) {
    // Mostramos mensaje de error en caso de que algo falle
        alert(`Ocurrió un error ${e.message}`);
    }
}

onMounted(() => {getPosts});
</script>

<template>
    <div class="main-container" v-if="!selectedPostId">
        <h2>Publicaciones</h2>
        <button @click="emits('changePage', 'create-post')" type="button">
            <p>Crear Publicación</p>
            <img src="https://th.bing.com/th/id/R.e3956e57360db26f1bfb076dc8c6b993?rik=nnqKo%2fU0PIULJQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_194863.png&ehk=rBnNrjucmayGnMHH13LzpLSRgf09IrhS3tDD49erb6U%3d&risl=&pid=ImgRaw&r=0" alt="">
        </button>
        <Post @click="emits('changePage', 'details-page')"/>
 
    </div>
</template>

<style>
.main-container{
    padding: 50px 0px;
    margin: auto;
    width: 50%;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.main-container > h2{
    font-size: 35px;
    color: rgb(87, 87, 87);
    text-align: center;
}
.main-container > button{
    margin: 5px auto 30px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 30%;
    height: 36px;
    background-color: #D43A72;
    border-radius: 15px;
    border: none;
    cursor: pointer;
}
.main-container > button > p{
    color: white;
    font-size: 15px;
}
.main-container > button > img{
    width: 20px;
    height: 20px;
}
</style>