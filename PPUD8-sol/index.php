<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba práctica UD8</title>
    <link rel="stylesheet" href="css/estilos.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>

<body>
    <h1>Prueba Práctica UD8</h1>
    <h2>Encuentra la Estación de Servicio más ecnómica de Vigo el 01/05/2024 </h2>

    <div class="container-fluid">
    <form action="" method="POST" id="formProductos">
        <label class="form-label" for="producto">Seleccione el producto</label>
        <select name="productos" id="productos">

        </select>
        
        <input class="btn btn-primary mb-3" type="submit" value="Obtener estación más económica">
    </form>

    <div id="map"></div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>


    <script src="js/globals.js"></script>

   
   


    <script src="js/map.js" type="text/javascript"></script>
    <script src="js/geolocation.js" type="text/javascript"></script>


</body>

</html>