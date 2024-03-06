 import { autores } from "./data.js";
  
 
 /* 
Instrucciones mejoradas:

1. Filtrar y crear un nuevo array:
   - En la variable "autores", tienes una lista de diferentes autores. Filtra la lista y crea un nuevo array donde almacenes los nombres de cada autor y su id, por ejemplo: [{id: x, autor: nombre_autor}]

2. Crear una función "nombreDeTuPreferencia":
   - Esta función recibirá como parámetros dos valores (id, nombre).

3. Dentro de la función creada anteriormente:
   0. Crea un elemento li.
   1. Agrega un id al elemento (el id lo estás recibiendo como parámetro) --> li.id = id.
   2. Agrega la clase "item_autor" --> li.classList.add('item_autor').
   3. Agrega contenido al li (el contenido es el nombre que estás recibiendo como parámetro).

4. En el HTML, encontrarás una lista (ul). Agregále un id:
   0. Utiliza getElementById o querySelector para llamar el elemento con el id que acabas de agregar.
   1. A este elemento, agrégale el li que creaste anteriormente mediante appendChild(li).

5. Itera la lista de usuarios que creaste en el punto 1:
   0. Llama a la función que creaste en el punto 3 dentro de la iteración recién creada.
   1. Del item que te devuelve el iterador, facilita los parámetros que espera la función.

6. Al li que creaste anteriormente, agrega un escuchador de evento click (.addEventListener)
   0. Obtén el id del li al cual le hagas click y muéstralo con console.log() o alert();

7. Filtrar y crear un nuevo array:
    0. En cada objeto del array autores existe una llave llamada *obras:* esta es un array de objetos. De cada uno de los objetos dentro de obras, obtén el género de cada obra y agrégalos a un nuevo array.   
    1. Si haces un console.log() del array que creaste anteriormente notarás que hay valores repetidos, evita que hayan valores repetidos.
*/
