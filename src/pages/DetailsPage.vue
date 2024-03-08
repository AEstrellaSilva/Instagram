<script setup>
const emits = defineEmits(['changePage', 'deletePost']);
</script>

<template>
    <div class="details-container">
        <div class="post-container">
            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <div id="data">
                <p>@usuario</p>
                <p>wawa</p>
            </div>
            <hr>
            <div id="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem obcaecati sapiente laudantium</p>
                <p id="date">wawa</p>
                <div id="icons">
                    <img @click="emits('changePage', 'edit-post')" id="edit" src="https://th.bing.com/th/id/R.e3956e57360db26f1bfb076dc8c6b993?rik=nnqKo%2fU0PIULJQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_194863.png&ehk=rBnNrjucmayGnMHH13LzpLSRgf09IrhS3tDD49erb6U%3d&risl=&pid=ImgRaw&r=0" alt="">
                    <img @click="emits('deletePost')" id="delete" src="https://th.bing.com/th/id/R.8755a428a8c20371c526801d5fe99f13?rik=WqOouSZhm1UcmQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_519492.png&ehk=sE9nc1dd4NyLKqb37WAIKRVHS8i4OBCkJFLzecDdsCY%3d&risl=&pid=ImgRaw&r=0" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<style>
.details-container{
    padding: 50px 0px;
    margin: auto;
    width: 50%;
    background-color: whitesmoke;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.details-container > .post-container{
    margin: 0px auto 40px;
    padding: 0px 0px 10px;
    background-color: white;
    border-radius: 20px;
    width: 75%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 4px 10px -2px, rgba(0, 0, 0, 0.3) 0px 2px 6px -3px;
}
.details-container > .post-container > img{
    object-fit: cover;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    height: 300px;
}
.details-container > .post-container > #data{
    display: flex;
    position: relative;
    left: 5%;
    width: 90%;
    justify-content: space-between;
}
.details-container > .post-container > hr{
    margin: 5px 0px;
}
.details-container > .post-container > #description{
    text-align: justify;
    position: relative;
    left: 5%;
    width: 90%;
}
.details-container > .post-container > #description > #date{
    color: darkgray;
}
.details-container > .post-container > #description > #icons{
    width: 20%;
    position: relative;
    left: 90%;
    justify-content: space-between;
}
.details-container > .post-container > #description > #icons > img{
    margin: 0px 5% 0px;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
</style>