<script setup>
import { auth } from '../firebase';
import { updateProfile } from 'firebase/auth';

async function updateProfileData(name, photoURL) {
    await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL
    });
}
</script>

<template>
    <div class="profile-container">
        <h2>Perfil</h2>
        <div>
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <p>Usuario</p>
        </div>
        <hr>
        <div class="posts">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
        </div>
    </div>
</template>

<style>
.profile-container{
    padding: 50px 0px;
    margin: auto;
    width: 50%;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.profile-container > h2{
    font-size: 35px;
    color: rgb(87, 87, 87);
    text-align: center;
}
.profile-container > div{
    margin: auto auto 20px;
    display: flex;
    align-items: center;
    width: 80%;
}
.profile-container > div > img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.profile-container > div > p{
    font-size: 26px;
    margin: 0px 0px 0px 20px;
}
.profile-container > .posts{
    margin: 20px auto 0px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}
.profile-container > .posts > img{
    margin: 0px 10px 10px 0px;
    object-fit: cover;
    width: 200px;
    height: 200px;
    border-radius: 0%;
}
</style>