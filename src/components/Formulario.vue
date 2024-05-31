<template>
  <div class="cuerpoPag">
        <div class="formulario">          
            <form @submit.prevent="guardarDatos">
                <label for="nombre">Nombre</label>
                <input type="text" v-model="nombre" id="nombre" placeholder="Nombre del videojuego">

                <label>Plataforma</label>
                <select v-model="plataforma">
                    <option value="">PC | PlayStation | Xbox One</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox One">Xbox One</option>

                </select>

                <label>Estado</label>
                <select name="estado" id="estado" v-model="estado">
                    <option value="">Pendiente | Jugando | Completado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Jugando">Jugando</option>
                    <option value="Completado">Completado</option>

                </select>

                <label for="puntaje">Puntaje</label>
                <input type="number" v-model.number="puntaje" name="puntaje" id="puntaje" placeholder="Valor numérico del 1 al 10">

                <div class="botonRegistrar">
                    <button class="botonRegistrar" type="submit">Registrar videojuego</button>
                </div>
            </form>      
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { juegosGuardados } from '../stores/DatosJuegos'

export default {
    setup() {
        const videoJuegoGuardado = juegosGuardados()
        const nombre = ref('')
        const plataforma = ref('')
        const estado = ref('')
        const puntaje = ref('')

        const guardarDatos = () => {
            if (nombre.value === '') {
                alert("El nombre es un campo obligatorio");
            }
            if (plataforma.value === ''){
                alert("la plataforma es un campo obligatorio");
            }
            if (estado.value === ''){
                alert("El estado es un campo obligatorio");
            }
            else if (puntaje.value < 1 || puntaje.value > 10) {
                alert("Debe ingresar un valor numérico entre 1 y 10")
            }
            else{
                const nuevoJuego = {
                    nombre: nombre.value,
                    plataforma: plataforma.value,
                    estado: estado.value,
                    puntaje: puntaje.value
                }
                videoJuegoGuardado.agregarJuego(nuevoJuego)
                nombre.value = ''
                plataforma.value = ''
                estado.value = ''
                puntaje.value = ''
            }
        }
        return { nombre, plataforma, estado, puntaje, guardarDatos}
    }
}
</script>

<style>
body
{
font-family: Arial, Helvetica, sans-serif;
background-color: white;

}
.cuerpoPag
{
background-color: #f0f0f0;
width: 100%;
margin: auto;
padding: 30px;

}
h1
{
text-align: center;
}
h2
{
margin-top: 20px;

}
label
{
margin-bottom:  7px;    

}
input, select
{
width: 100%;
padding: 8px;
box-sizing: border-box;
border: black 1px solid;
border-radius: 2px;

}

.botonRegistrar
{
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 5px;
    
    border: none;
    background-color: gray;
    color: black;
    border-radius: 2px;

}

</style>

