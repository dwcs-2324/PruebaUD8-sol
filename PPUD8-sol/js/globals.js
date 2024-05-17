
//BING MAPS
const YOUR_BING_MAPS_API_KEY = '';



const RELACION_ESCALA_ZOOM = 156543.03392
const RADIO = 10; //km
const EXPAND_FACTOR = 8;


//Documentación: 
//https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/help/operations/PreciosEESSTerrestresHistFiltroMunicipioProducto
//gasoleo convencional 01/05/2024 Vigo uri
const FUEL_VIGO_URL = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestresHist/FiltroMunicipioProducto/01-05-2024/5324/{product_id}';
const PRODUCTS_URL = 'https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/ProductosPetroliferos/';

window.onload = onceLoaded;
function onceLoaded() {
    console.log('window loaded');

     // Creamos script dinámicamente para poder añadir la clave de bing maps
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = 'http://www.bing.com/api/maps/mapcontrol?key=' + YOUR_BING_MAPS_API_KEY;
 
     // Añadimos antes de cerrar el body
     document.body.appendChild(script);

    getProductos();

    document.getElementById('formProductos').onsubmit = getCoordinatesEstacion;
}

function getProductos() {

    fetch(PRODUCTS_URL)
        .then(response => response.json())
        .then(data => {
            buildProductosSelect(data);
        })
        .catch(error => {
            console.log(error);
            alert('No se han podido encontrar los productos');
        });

}

function buildProductosSelect(productos) {
    let select_roles = document.querySelector('#productos');
    for (let i = 0; i < productos.length; i++) {
        let option = '<option value="' + productos[i].IDProducto + '">' + productos[i]["NombreProducto"] + '</option>';
        select_roles.innerHTML += option;
    }
}