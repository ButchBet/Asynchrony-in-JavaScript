import Product from './product.js';

// Function to make the request
function postData(API, data) {
  const option = { // Request option
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    mode: 'cors',
    body: JSON.stringify(data),
    credentials: 'same-origin',
  };
  
  const response = fetch(API, option);
  
  return response;
}

// Functio to verify status of request
function requestOk(response) {
  if(!response.ok) {
    throw new Error(response.status)
  }

  return response.json();
}

// Function to enter the data to build the product
function buildProduct() {  
  const title = prompt('Enter the title for the product');
  const price = Number(prompt('Enter the price of the product'));
  const description = prompt('Enter the description of the product');
 
  let categoryId;
  
  do {
    categoryId = Number(prompt('Enter the category: 1. Clothes, 2. Electronics, 3. Furniture, 4. Shoes, 5. Others'));
  } while(categoryId < 1 && categoryId > 5);

  const images = [];

  let imageURL;

  let option;

  do {
    imageURL = prompt('Enter the image url of the product');

    images.push(imageURL);

    option = Number(prompt('Do you want to add other url?: 1. yeas, other. not'));
  } while(option === 1);

  const product = new Product(title, price, description, categoryId, images);

  return product;
}


// Function to validate that the user wants to build a product 
export default function main(API) {
  const product = buildProduct();

  postData(`${API}/products`, product)
    .then((response) => {
        return requestOk(response);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

    const option =  Number(prompt('Do you want to add post other product?: 1. yeas, other. not'));

    if(option === 1) {
      main(API);
    } 
}