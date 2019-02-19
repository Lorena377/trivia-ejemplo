function empezar() {
  const name = prompt("Ingresa tu nombre");
  const saludo = document.getElementById("saludo");
  document.getElementById("intro").style.display = "none";
  //alert (saludo);
   saludo.innerHTML = 'Hola'+' '+ name + ' '+'¿Qué ruta tomarás?';
}

function tema1() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("pregunta1peru").style.display = "block";
  document.getElementById("pregunta2peru").style.display = "block";
  document.getElementById("pregunta3peru").style.display = "block";
}


function Procesar() { 
  //declaración de constantes
const aventuraP1 = document.getElementById("pr1");
const aventuraP2 = document.getElementById("pr6");
const aventuraP3 = document.getElementById("pr8");
  
  //declarando e inicializando las variables que servirán como contadores de respuesta correctas
  let con1= 0;
  let con2= 0;
  let con3= 0;
  
 if(aventuraP1.checked){
    con1=1;
  }
  if(aventuraP2.checked) {
     con2=1;    
  }
  if(aventuraP3.checked){
    con3=1;
  }
  
  //almacenar el valor de los contadores que puede ir de 0 a 3
let resAventuraP = (con1+con2+con3);

//Pintando en el html el resultado
  const respuesta = document.getElementById("respuesta");
     respuesta.innerHTML = 'La respuesta es '+ resAventuraP;
  }

function Regresar() {
  document.getElementById("intro").style.display = "block";
  document.getElementById("saludo").style.display = "none";
  document.getElementById("pregunta1peru").style.display = "none";
  document.getElementById("pregunta2peru").style.display = "none";
  document.getElementById("pregunta3peru").style.display = "none";
  document.getElementById("botones").style.display = "none";
  document.getElementById("botonesProceso").style.display = "none";
}