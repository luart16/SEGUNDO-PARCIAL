<template>
    <div class="container">
        <h1>Administración de videojuegos</h1>
        <div class="form-container">
            <h2>Nuevo videojuego</h2>
            <form id="videojuego-form">
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <span class="error" id="nombre-error"></span>
                </div>
                <div class="form-group">
                    <label for="plataforma">Plataforma:</label>
                    <select id="plataforma" name="plataforma" required>
                        <option value="">Seleccione una plataforma</option>
                        <option value="PC">PC</option>
                        <option value="PlayStation">PlayStation</option>
                        <option value="Xbox One">Xbox One</option>
                    </select>
                    <span class="error" id="plataforma-error"></span>
                </div>
                <div class="form-group">
                    <label for="estado">Estado:</label>
                    <select id="estado" name="estado" required>
                        <option value="">Seleccione un estado</option>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Jugando">Jugando</option>
                        <option value="Completado">Completado</option>
                    </select>
                    <span class="error" id="estado-error"></span>
                </div>
                <div class="form-group">
                    <label for="puntaje">Puntaje:</label>
                    <input type="number" id="puntaje" name="puntaje" min="1" max="10">
                    <span class="error" id="puntaje-error"></span>
                </div>
                <div class="form-group">
                    <button type="submit">Registrar videojuego</button>
                </div>
            </form>
        </div>

        <h2>Videojuegos</h2>
        <div class="filters">
            <input type="text" id="filter-nombre" placeholder="Nombre">
            <select id="filter-plataforma">
                <option value="">Plataforma</option>
                <option value="PC">PC</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox One">Xbox One</option>
            </select>
            <select id="filter-estado">
                <option value="">Estado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Jugando">Jugando</option>
                <option value="Completado">Completado</option>
            </select>
        </div>

        <table id="videojuegos-table">
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
                <!-- Aquí se añadirán las filas dinámicamente -->
            </tbody>
        </table>

        <div id="videojuego-detalle" class="detalle">
            <!-- Detalles del videojuego seleccionado -->
        </div>
    </div>
</template>

<script>
</script>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
}

.cuerpo {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
}

h1 {
    text-align: center;
}

h2 {
    margin-top: 20px;
}

.form-container, .filters, .detalle {
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"], input[type="number"], select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #28a745;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
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

.error {
    color: red;
    font-size: 0.9em;
}

.detalle {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
}
</style>