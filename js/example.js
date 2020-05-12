//  'var' crea una variable siempre se crean arriba para que el archivo las carge al principio en memoria  y las pueda usar cuando las necesite
    var persona = "persona";

// ejemplo de array
// var lista_array_arreglo = {1,2,3,4,5,6}

// ejemplo de objeto del paradigma de la programacion orientada a objetos POO

// var coche = {
//                 color 'Rojo'
//                 Motor 'gasolina'
//                 puertas '5'
// }

//  Ejemplo sencillo de una funcion llamada saludar la cual nos muestra por consola el texto Hola Toni

function saludar(){
    console.log('Hola Toni')
}
saludar();


//  Ejemploejemplo de funcion con un parametro y concatenacion del parametro con el texto

function despedir(nombre){
    console.log("Adios " + nombre);
}
    despedir("Toni");
    despedir("Jose");
    despedir("Luis");

