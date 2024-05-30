<template>
    <div v-if="Juego" class="infoJuego">
        <p>Nombre {{ Juego.nombre }} </p>
        <p>Plataforma {{ Juego.plataforma }}</p>
        <p>Estado {{ Juego.estado }}</p>
        <p>Puntaje {{ Juego.puntaje }}</p>

    </div>
</template>

<script>
export default {
    props: {
        Juego: {
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