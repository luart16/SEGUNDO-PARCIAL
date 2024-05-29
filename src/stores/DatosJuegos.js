
import { defineStore } from 'pinia'

export const juegosGuardados = defineStore('juegoStore', {
    state: () => ({
        juegos: []
    }),
    actions: {
        agregarJuego(Juego){
            this.juegos.push(Juego)
        }
    }
})
