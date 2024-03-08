<script setup>
import { ref, onMounted } from "vue";
import { firestore, auth } from "@/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const emits = defineEmits(['cancel', 'save']);

const user = ref(auth, 'user');
const newPost = ref("");

async function submitPost(){
   try {
      // Primero creamos la referencia a la colección de reseñas
      const postsCollection = collection(firestore, "posts");
      // Luego añadimos un documento a la colección con la función addDoc,
      // que toma como argumentos la colección y el documento a añadir como un objeto
      await addDoc(postsCollection, {
         userId: user.value.uid,
         userEmail: user.value.email,
         content: newPost.value,
         createdAt: serverTimestamp() //Fecha, new Date() 
      });
      // Mostramos mensaje de éxito
      alert("Posted");
      // Limpiamos el textarea
      newPost.value = "";
   } catch (e) {
      // Mostramos mensaje de error en caso de que falle
      alert(`Ocurrió un error ${e.message}`);
   }
}

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
     user.value = currentUser;
  });
});
</script>

<template>
    <div class="main-container">
        <h2>Crear publicación</h2>
        <div class="image-details">
            <div>
                <h3>Imagen:</h3>
                <button type="button">Elegir archivo</button>
            </div>

            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <hr>
            <div id="description">
                <h3>Descripción:</h3>
                <input type="text" placeholder="Agrega una breve descripción">
            </div>
        </div>
        <button @click="emits('cancel', 'main-page')" type="button" id="cancel"><p>Cancelar</p></button>
        <button @click="submitPost" type="submit"><p>Publicar</p></button>
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
.main-container > .image-details{
    margin: auto;
    width: 75%;
}
.main-container > .image-details > div{
    margin: 10px 0px;
    display: flex;
    align-items: center;
    width: 100%; 
}
.main-container > .image-details > div > h3{
    margin: 0px 10px 0px 0px;
}
.main-container > .image-details > div > button{
    align-items: center;
    color: white;
    font-size: 15px;
    width: 30%;
    height: 36px;
    background-color: gray;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
.main-container > .image-details > img{
    width: 100%;
}
.main-container > .image-details > #description{
    display: block;
    width: 100%;
}
.main-container > .image-details > #description input{
    background-color: white;
    border-radius: 10px;
    border: solid 1px darkgray;
    width: 100%;
    padding: 10px;
}
.main-container > button{
    margin: 10px auto;
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
.main-container > #cancel{
    margin: 5px auto;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 30%;
    height: 36px;
    background-color: gray;
    border-radius: 15px;
    border: none;
    cursor: pointer;
}
</style>