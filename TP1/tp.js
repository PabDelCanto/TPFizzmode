/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. 
No habrá discriminación entre las vocales en mayúscula y en minúscula. 
Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarConsonantes(texto) {
  let consonantes = -1;

  if (typeof (texto) != 'string') {
    return consonantes;
  } else {
    consonantes = 0;
    let textoUpper = texto.toUpperCase();
    for (let i = 0; i <= textoUpper.length; i++) {
      if (textoUpper[i] != "A" &&
        textoUpper[i] != "E" &&
        textoUpper[i] != "I" &&
        textoUpper[i] != "O" &&
        textoUpper[i] != "U") {
          consonantes++;
      }
    }
    return consonantes;
  }
}

/* 
Crear un repo en github y subir todo el proyecto. 
Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto).
Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/PabDelCanto/TPFizzmode.git"
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. 
La clase recibirá un texto que se guardará en una propiedad llamada texto. 
ContadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, 
caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () => {
  return class x {   

    constructor(texto) {
      if(x.contadorInstancias){
        x.contadorInstancias++
      }
      else{
        x.contadorInstancias = 1
      }
      x.texto = texto      
    }

    contadorPalabras() {
      if(typeof(x.texto)== "string"){
        if(x.texto == ""){
          return 0
        }
      var array = x.texto.split(" ")
      return array.length
      }
      else{
        return -1
      }
    }

    hayNumeros() {
      if(typeof (x.texto) == "string"){
        if(x.texto == ""){
          return 0
        }
        
        let textoFormateado = x.texto.split(" ").join("")

        for(let i = 0; i <= textoFormateado.length; i++){
          for(let j = 0; j <= 9; j++){
            if(textoFormateado[i] == j)            
            return true
          }
        }        
      }
      else if(typeof (x.texto) != "string"){
        return -1
      }
      else{
        return false
      }      
    }
  }
}


module.exports = {
  contarVocales,
  urlRepo,
  crearClase
};