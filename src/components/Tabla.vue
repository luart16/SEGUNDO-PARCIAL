<template>
    <div class="videojuego-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Estado</th>
            <th>Puntaje</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(videojuego, index) in videojuegos" :key="index">
            <td>{{ videojuego.nombre }}</td>
            <td>{{ videojuego.plataforma }}</td>
            <td>{{ videojuego.estado }}</td>
            <td>{{ videojuego.puntaje }}</td>
            <td><button @click="seleccionarVideojuego(videojuego)">Mostrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useVideojuegoStore } from '../stores/videojuegoStore'
  
  export default {
    props: {
      onSeleccionarVideojuego: {
        type: Function,
        required: true
      }
    },
    setup(props) {
      const videojuegoStore = useVideojuegoStore()
  
      const seleccionarVideojuego = (videojuego) => {
        props.onSeleccionarVideojuego(videojuego)
      }
  
      return { videojuegos: videojuegoStore.videojuegos, seleccionarVideojuego }
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