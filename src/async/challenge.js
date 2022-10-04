//Platzi-Async
//Author: @marigabirodcue
//Date: 01/07/2022

const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

//Declaración de fetchData como la función del Generador
async function* fetchData(url) {
  try {
    const response = await fetch(url);
    yield await response.json(); 
  } catch(error) {
    console.log(error);
  }
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
	console.log(value[0]); //Imprime la lista de los Productos de la API
	
	const idProduct =value[0].id; //Extrae el id del producto que queremos manipular
 		
	fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
        	
		console.log(value.title); //Imprime el Título del producto solicitado
        
		const idCategory = value.category.id;
        
fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {
           
			console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        	});
    	});
});