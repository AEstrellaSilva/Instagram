<script setup>
import { computed, ref } from 'vue';
import { onMounted } from 'vue';
import { auth } from "@/firebase.js";
import { onAuthStateChanged } from 'firebase/auth';

import LoginPage from './pages/LoginPage.vue';
import MainPage from './pages/MainPage.vue';
import NavBar from './components/NavBar.vue';
import CreatePost from './pages/CreatePost.vue';
import EditPost from './pages/EditPost.vue';
import DetailsPage from './pages/DetailsPage.vue';
import ProfilePage from './pages/ProfilePage.vue';

const isLoginShown = computed(() => user.value === null);
const pageShown = ref('main-page');
const user = ref(null);


function changePage(newpage){
    pageShown.value = newpage
}

onMounted(() => {
   // onAuthStateChanged escucha los cambios en la autenticación del usuario
   onAuthStateChanged(auth, (currentUser) => {
       user.value = currentUser;
   });
});
</script>

<template>
<LoginPage @hide-login="isLoginShown = false;" v-if="isLoginShown === true"/>

<div v-else>
    <NavBar @change-page="changePage"/>
    <MainPage @change-page="changePage" v-if="pageShown === 'main-page'"/>
    <CreatePost @cancel="changePage" v-if="pageShown === 'create-post'"/>
    <EditPost @cancel="changePage" v-if="pageShown === 'edit-post'"/>
    <DetailsPage @change-page="changePage" v-if="pageShown === 'details-page'"/>
    <ProfilePage v-if="pageShown === 'profile-page'"/>
</div>
</template>

<style scoped>

</style>
