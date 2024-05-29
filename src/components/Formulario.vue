<template>
    <div class="cuerpoPag">
        <h1>Administración de videojuegos</h1>
        <h2>Nuevo videojuego</h2>

        <div>            
            <form>
                <label>Nombre</label>
                <input type="text" value="Cualquier texto" required>

                <label>Plataforma</label>
                <select required>
                    <option value="">PC | PlayStation | Xbox One</option>
                    <option value="PC">PC</option>
                    <option value="PlayStation">PlayStation</option>
                    <option value="Xbox One">Xbox One</option>

                </select>

                <label>Estado</label>
                <select name="estado" id="estado" required>
                    <option value="">Pendiente | Jugando | Completado</option>
                    <option value="Jugando">Jugando</option>
                    <option value="Completado">Completado</option>

                </select>

                <label for="puntaje">Puntaje</label>
                <input type="number" name="puntaje" id="puntaje" min="1" max="10">

                <div class="botonRegistrar">
                   <button type="submit">Registrar videojuego</button>
                </div>

            </form>

        </div>
    </div>
</template>

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