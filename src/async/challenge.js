const API = "https://api.escuelajs.co/api/v1";

async function fetchData(URL) {
  const response = fetch(URL);
  const data = (await response).json();
  
  return data;
}

const processData = async (URL) => {
  try {
  	const products = await fetchData(`${URL}/products`);
    const product = await fetchData(`${URL}/products/${products[0].id}`);
    const category = await fetchData(`${URL}/categories/${product.category.id}`);
    
    console.log(products[0]);
    console.log(product.title);
    console.log(category.name);
  } catch(error) {
    console.log(error)
  }
}

processData(API);