<script setup>
const emits = defineEmits(['cancel', 'save'])
</script>

<template>
    <div class="main-container">
        <h2>Editar publicación</h2>
        <div class="image-details">
            <div>
                <h3>Imagen:</h3>
                <button type="button">Elegir archivo</button>
            </div>

            <img src="https://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg" alt="">
            <hr>
            <div id="description">
                <h3>Descripción:</h3>
                <input type="text" placeholder="wawa">
            </div>
        </div>
        <button @click="emits('cancel', 'main-page')" type="button" id="cancel"><p>Cancelar</p></button>
        <button type="button"><p>Guardar cambios</p></button>
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