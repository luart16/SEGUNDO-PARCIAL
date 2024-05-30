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
                <tr v-for="(i, index) in Juego" :key="index">
                    <td>{{ i.nombre }}</td>
                    <td>{{ i.plataforma }}</td>
                    <td>{{ i.estado }}</td>
                    <td>{{ i.puntaje }}</td>
                    <td><button @click="seleccionarJuego(i)">Más Info</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { JuegosGuardados } from '../stores/DatosJuegos';

export default {
    props: {
        onSeleccionarJuego:{
        type: Function,
        required: true
       } 
    },

    setup(props){
        const juegoStore = JuegosGuardados()

        const seleccionarJuego = (i) => {
            props.onSeleccionarJuego(i)
        }
        return {Juego: juegoStore.juegos, seleccionarJuego}
    }
}
</script>

<style>
button {
    padding: 10px 20px;
    border: none;
    background-color: #28a745;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
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