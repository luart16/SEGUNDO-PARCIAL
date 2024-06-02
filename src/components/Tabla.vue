<template>
    <div class="Contenedor-Filtro">
      <button class="Filtrar" @click="alternadorFiltros">Filtrar</button>
      <div v-if="mostrarFiltros" class="Filtros">
            <input type="text" v-model="filtroNombre" id="nombre" placeholder="Nombre del videojuego"/>
    
            <select v-model="filtroPlataforma">
            <option value="">Todos</option>
            <option value="PC">PC</option>
            <option value="PlayStation">PlayStation</option>
            <option value="Xbox One">Xbox One</option>
            </select>
    
            <select v-model="filtroEstado">
            <option value="">Todos</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Jugando">Jugando</option>
            <option value="Completado">Completado</option>
            </select>
        </div>
    </div>
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
          <tr v-for="(juego, index) in juegosFiltrados" :key="index">
            <td>{{ juego.nombre }}</td>
            <td>{{ juego.plataforma }}</td>
            <td>{{ juego.estado }}</td>
            <td>{{ juego.puntaje }}</td>
            <td><button @click="seleccionarJuego(juego)">+</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { juegosGuardados } from '../stores/DatosJuegos';
  import { ref, computed, watch } from 'vue';
  
  export default {
    props: {
      onSeleccionarJuego: {
        type: Function,
        required: true
      }
    },
  
    setup(props) {
      const videoJuegoGuardado = juegosGuardados();
      const juegos = ref(videoJuegoGuardado.juegos);
  
      const filtroNombre = ref('');
      const filtroPlataforma = ref('');
      const filtroEstado = ref('');

      const mostrarFiltros = ref(false);

        const alternadorFiltros = () => {
        mostrarFiltros.value = !mostrarFiltros.value;
        };
  
      const juegosFiltrados = computed(() => {
        return juegos.value.filter(juego => {
          const coincidenciaNombre = juego.nombre.toLowerCase().includes(filtroNombre.value.toLowerCase());
          const coincidenciaPlataforma = !filtroPlataforma.value || juego.plataforma === filtroPlataforma.value;
          const coincidenciaEstado = !filtroEstado.value || juego.estado === filtroEstado.value;
          return coincidenciaNombre && coincidenciaPlataforma && coincidenciaEstado;
        });
      });
  
      const seleccionarJuego = (juego) => {
        props.onSeleccionarJuego(juego);
      };
  
  
      return {
        filtroNombre,
        filtroPlataforma,
        filtroEstado,
        juegosFiltrados,
        seleccionarJuego,
        mostrarFiltros,
        alternadorFiltros,
      };
    }
  };
  </script>
 
  
<style>
.Contenedor-Filtro .Filtrar{
    display: flex;
  margin-left: 25vw;
  margin-right: 5vw;
  padding-left: 4%;
  padding-right: 3%;
}
.Filtros {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 10px;
}
button.Filtrar{
    width: 15%;
    padding-top: 1%;
    padding-bottom: 1%;
    margin-top: 10px;
    margin-bottom: 5px;
    border: none;
    background-color: gray;
    color: black;
    border-radius: 2px;
}
table {
    margin-top: 5%;
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
