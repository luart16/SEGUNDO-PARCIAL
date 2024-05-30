<template>
    <div class="cuerpoPag">
        <div>            
            <form @submit.prevent="guardarDatos">
                <label for="nombre">Nombre</label>
                <input type="text" v-model="nombre" id="nombre" required>
  
                <label>Plataforma</label>
                <select v-model="plataforma" required>
                    <option value="">PC | PlayStation | Xbox One</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox One">Xbox One</option>
  
                </select>
  
                <label>Estado</label>
                <select name="estado" id="estado" v-model="estado" required>
                    <option value="">Pendiente | Jugando | Completado</option>
                    <option value="Jugando">Jugando</option>
                    <option value="Completado">Completado</option>
  
                </select>
  
                <label for="puntaje">Puntaje</label>
                <input type="number" v-model="puntaje" name="puntaje" id="puntaje" min="1" max="10">
  
                <div class="botonRegistrar">
                   <button type="submit">Registrar videojuego</button>
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
      const juegos = juegosGuardados()
      const nombre = ref('')
      const plataforma = ref('')
      const estado = ref('')
      const puntaje = ref('')

      const guardarDatos = () => {
          const nuevoJuego = {
              nombre: nombre.value,
              plataforma: plataforma.value,
              estado: estado.value,
              puntaje: puntaje.value
          }
          juegos.agregarJuego(nuevoJuego)
          nombre.value = ''
          plataforma.value = ''
          estado.value = ''
          puntaje.value = ''

      }

      return { nombre, plataforma, estado, puntaje, guardarDatos }

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
  width: 75%;
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

</style>
