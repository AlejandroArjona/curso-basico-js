const h1 = document.querySelector("h1");/*Esto lo hacemos para poder conectar una etiqueta html con js*/
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");/*Esto lo hacemos para poder conectar una clase html con js*/
const pid = document.getElementById("pid");/*Esto lo hacemos para poder conectar un id html con js*/
const input = document.querySelector("input");

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
/*Con innerHTML podemos modificar la etiqueta html seleccionada y modificarla incluso con codigo html dentro de el*/
h1.innerHTML = "Patito <br> feo"
/* Con innerText solo nos permitira modificar texto */
h1.innerText = "Patito <br> feo"
/* //con getAttribute podemos obtener el valor del atributo solicitado
console.log(h1.getAttribute("class"));
//con setAttribute podemos modificar el valor del atributo seleccionado
h1.setAttribute("class", "rojo"); */

/* //classList.add sirve para añadir clases a un elemento html
h1.classList.add("rojo");
//classList.remove sirve para eliminar clases existentes de un elemento html
h1.classList.remove("verde"); */

const img = document.createElement("img");//inicializamos una variable que contendra la creacion de un elemento
img.setAttribute("src", "https://static.platzi.com/static/images/conf/logo_black@2x.png");//se añade el atributo y su valor
console.log(img);//imprimimos la constante

pid.append(img);//añadimos dicha constante dentro del elemento seleccionado