<template>
    <div v-if="juego" class="infoJuego">
        <p>Nombre {{ juego.nombre }} </p>
        <p>Plataforma {{ juego.plataforma }}</p>
        <p>Estado {{ juego.estado }}</p>
        <p>Puntaje {{ juego.puntaje }}</p>

    </div>
</template>

<script>
export default {
    props: {
        juego: {
            type: Object,
            default: null
        }
    }
}

</script>

<style>

.infoJuego 
{
    border: black 1px solid;
    padding: 1em;
    margin-top: 1em;
}
p
{
    color: black;
}

</style>