/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let claves = Object.keys(objeto);
   let resultado = [];
   for (let i = 0; i < claves.length; i++) {
      const clave = claves[i];
      resultado.push([clave, objeto[clave]]);
   }
   return resultado;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let array = string.split("");
   array.sort();
   let anterior = array[0];
   let contador = 1;
   let salida = {};
   for (let i = 1; i < array.length; i++) {
      let actual = array[i];
      if (anterior == actual) {
         contador++;
      } else {
         salida[anterior] = contador;
         contador = 1;
         anterior = actual;
      }
   }
   salida[anterior] = contador;
   return salida;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let cad = string.split("");
   let cadMayus = [];
   let cadMinus = [];

   cad.forEach(x => {
      if (x === x.toUpperCase())
         cadMayus.push(x);
      else
         cadMinus.push(x);
   });
   return cadMayus.concat(cadMinus).join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabras = frase.split(" ");
   let palabrasInvertidas = palabras.map((x) => {
      return x.split("").reverse().join("");
   })
   return palabrasInvertidas.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let array = numero.toString().split("");
   let ini = 0;
   let fin = array.length - 1;
   while (ini < fin) {
      if (array[ini] != array[fin])
         return "No es capicua";
      ini++;
      fin--;
   }
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let resultado = [];
   string.split("").forEach(x => {
      if (!(x == 'a' || x == 'b' || x === 'c'))
         resultado.push(x);
   });
   return resultado.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   function criterio(a, b) {
      return a.length - b.length;
   }

   return arrayOfStrings.sort(criterio);

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let result = [];
   array1.forEach(x => {
      if (array2.includes(x))
         result.push(x);
   });
   return result;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
