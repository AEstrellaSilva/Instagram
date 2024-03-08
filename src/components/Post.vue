<script setup>
import { ref } from 'firebase/storage';

const emits = defineEmits(['changePage']);
const post = ref('posts');
</script>

<template>
    <div class="post-container">
        <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
        <div id="data">
            <p>sadsdasdasdasdasdsadsdasd</p>
            <p>asdasd</p>
        </div>
        <hr>
        <div id="description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem obcaecati sapiente laudantium</p>
            <p id="date">wawa</p>
        </div>
    </div>
</template>

<style>
.post-container{
    margin: 0px auto 40px;
    padding: 0px 0px 10px;
    background-color: white;
    border-radius: 20px;
    width: 75%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 10px -2px, rgba(0, 0, 0, 0.3) 0px 2px 6px -3px;
    cursor: pointer;
}
.post-container > img{
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 300px;
}
.post-container > #data{
    display: flex;
    position: relative;
    left: 5%;
    width: 90%;
    justify-content: space-between;
}
.post-container > hr{
    margin: 5px 0px;
}
.post-container > #description{
    text-align: justify;
    position: relative;
    left: 5%;
    width: 90%;
}
.post-container > #description > #date{
    color: darkgray;
}
</style>