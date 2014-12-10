// JavaScript Document


$(document).ready(function(e) { 
// watchId se refiere a la aceleracion 'actual'
// 
var watchID = null;
document.addEventListener("deviceready", Dispositivo_Listo, false);


//Cuando esta listo el dispositivo
//
function Dispositivo_Listo() {
	Comienza();
}
//Empieza la 'observacion' de la aceleracion
//
function Comienza() {
	//Actualiza la aceleracion cada 2 segundos
	//
	var opciones = { frequency: 2000 };
	watchID = navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);
	 navigator.geolocation.getCurrentPosition(Localiza, ErrorLocalizacion);
}
//Detiene la 'observacion' de la aceleracion 
//
function Detente() { 
if (watchID) {
	navigator.accelerometer.clearWatch(watchID);
	watchID= null;
   }
}
 // Correcto: Toma una captura de la aceleracion
 //
 function Correcto(acceleration) { 
 var element = document.getElementById('acelerometro');
 element.innerHTML = 'Aceleracion en X: ' + acceleration.x + '<br />' +
                     'Aceleracion en Y: ' + acceleration.y + '<br />' +
					 'Aceleracion en Z: ' + acceleration.z + '<br />' +
                     'Intervalo: '   + acceleration.timestamp + '<br />';
 }
 //error: Falla al obtener aceleracion 
 //
 function Error() { 
 alert('Error!');
 }
 //Exito al localizar
 //
 function Localiza(posicion) {
	 var element = document.getElementById('geolocalizacion');
	 element.innerHTML = 'Latitud: '        + posicion.coords.latitude    + '<br />' +
	                     'Longitud: '       + posicion.coords.longitude   + '<br />' +
						 'Altitud: '        + posicion.coords.altitude    + '<br />' +
						 'Precision: '        + posicion.coords.accuracy    + '<br />' +
						 'Precision de Altitud: '        + posicion.coords.altitudeAccuracy    + '<br />' +
						 'Direccion: '        + posicion.coords.heading    + '<br />' +
						 'Velocidad:'        + posicion.coords.speed    + '<br />' +
						 'Intervalo:'        + posicion.timestamp       + '<br />';
 }
 //Error en la geolocalizacion
 //
 function ErrorLocalizacion(error) {
	 alert('codigo:'   + error.code  + '\n' + 
	        'mendaje: ' + error.message +'\n');
 }
});//documento ready