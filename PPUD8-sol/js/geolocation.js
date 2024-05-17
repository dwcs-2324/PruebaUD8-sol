

function getCoordinatesEstacion(event) {
    event.preventDefault();

    let productosSelect = document.getElementById('productos');
    let product_id = productosSelect.value;
    let url = FUEL_VIGO_URL.replace('{product_id}', product_id);

    
    console.log('product_id' + product_id);
    console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (!data.ListaEESSPrecio.length) {
                alert('No se han encontrado resultados');
            }
            else {

                let minElement = data.ListaEESSPrecio[0];
                //buscamos el elemento con menor precio
                data.ListaEESSPrecio.forEach(element => {
                    if (minElement.PrecioProducto > element.PrecioProducto) {
                        minElement = element;
                    }
                });

                console.log('Found minimum price...');
                console.log(minElement);

                let latitud = minElement.Latitud;
                let longitud = minElement["Longitud (WGS84)"];


                latitud = latitud.replace(',', '.');
                longitud = longitud.replace(',', '.');


                console.log('lat: ' + latitud);
                console.log('longitud: ' + longitud);



                initMap(latitud, longitud, minElement);



            }
        }

        )
        .catch(error => {
            alert('Ha ocurrido un error y no se pueden obtener los datos');
            console.log(error);
        })

}


