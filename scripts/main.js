 import { autores } from "./data.js";
  
 /* 
 
    1: En la variable autores tienes una lista de  diferentes autores, filtra la lista y crea un nuevo array donde almacenes los nombres de cada autor y su id  ejem: [{id: x , autor: nombre_autor}]

    2: Crea una funcion nombreDeTuPreferencia que recibira como parametros dos valores (id, nombre)
    
    3: Dentro de la funcion que creaste anteriormente:
         0: crea un elemento li  
         1: agrega un id al elemento (el id lo estas recibiendo como paramentro) ----> li.id = id 
         2: agrega la clase item_autor ----> li.classList.add('item_autor');
         3: agrega contenido al li  (el contenido es el nombre que estas  recibiendo como parametro)

    4:  En el html encontraras una lista (ul) agregale un id: 
        0: utiliza getElementById o querySelector para llamar el elemento con el id que acabas de agregar.
        1: a este elemento agregale el li que creaste anteriormente. appendChield(li) 
    
    5: itera la lista de Usuarios que creaste en el punto 1:
       0: llama la funcion que craste en el punto 3 dentro de la iteracion que acabas de crear
       2: del item que te devuelve el iterador facilita los parametros que espera la funcion.

 */
