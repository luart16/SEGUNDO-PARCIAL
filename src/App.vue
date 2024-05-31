<template>
      <div class="cuerpoPag">
       <h1>Administración de videojuegos</h1>
       <h2>Nuevo videojuego</h2>
       <Formulario/>
       <Tabla @seleccionarJuego="dirigirSeleccion" />

       <MasInformacionJuego :Juego="videojuegoSeleccionado" />

      </div>
      
</template>

<script>
import { ref } from 'vue'
import Formulario from "./components/Formulario.vue"
import Tabla from "./components/Tabla.vue"
import MasInformacionJuego from './components/MasInformacionJuego.vue'

export default {
  components: {
    Formulario,
    Tabla,
    MasInformacionJuego
  },

  setup() {
    const videojuegoSeleccionado = ref(null)
    const dirigirSeleccion = (Juego) => {
      videojuegoSeleccionado.value = Juego
    }
    return { videojuegoSeleccionado, dirigirSeleccion}
  }
}

</script>

<style>
h1
{
text-align: center;
}
h2
{
margin-top: 20px;
text-align: left;

}

</style>
