<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Plataforma</th>
                    <th>Estado</th>
                    <th>Puntaje</th>
                    <th>Más info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(Juego, index) in juegos" :key="index">
                    <td>{{ Juego.nombre }}</td>
                    <td>{{ Juego.plataforma }}</td>
                    <td>{{ Juego.estado }}</td>
                    <td>{{ Juego.puntaje }}</td>
                    <td><button @click="seleccionarJuego(Juego)">+</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { juegosGuardados } from '../stores/DatosJuegos';

export default {
    props: {
        onSeleccionarJuego:{
        type: Function,
        required: true
       } 
    },

    setup(props){
        const videoJuegoGuardado = juegosGuardados()

        const seleccionarJuego = (Juego) => {
            props.onSeleccionarJuego(Juego)
        }
        return {juegos: videoJuegoGuardado.juegos, seleccionarJuego}
    }
}
</script>

<style>
button {   
   
    border: none;    
    color: black;
    
    
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

th {
    background-color: #eee;
}
</style>
