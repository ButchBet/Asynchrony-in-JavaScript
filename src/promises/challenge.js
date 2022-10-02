const option = { // Request option
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'omit',
  };
  
  const API = 'https://api.escuelajs.co/api/v1';
  
  const savedData = []; // To save the first products, the title of the products and the name of the category
  
  // Functio to verify status of request
  function requestOk(response) {
    if(!response.ok) {
      throw new Error(response.status)
    }
    
    return response.json();
  }
  
  // The first method
  
  const firstMethod = fetch(`${API}/products`, option)
      .then((response1) => { // Validation of the call to products
        return requestOk(response1);	
  })
      .then((response2) => { // Request the first product by the Id
        const firstProduct = response2[0];
        const firstProductId = firstProduct.id;
      
        return fetch(`${API}/products/${firstProductId}`, option);
  })
      .then((response3) => { // Validation of the call to the first products
        return requestOk(response3);
  })
      .then((response4) => { // Request the category by the Id
        savedData.push(response4); // Save the first product
        savedData.push(response4.title); // Save the title of the first product
    
        const category = response4.category;
        const categoryId = category.id;
          
        return fetch(`${API}/categories/${categoryId}`);
  })
      .then((response5) => { // Validation of the call to the category
            return requestOk(response5);
  })
      .then((response6) => {
          savedData.push(response6.name);
    
        // Show the colected data
        savedData.forEach((v, i, a) => {
        console.log(v);
        });
  })
      .catch((error) => {
        console.error(error);
  }); 
  
  // Second method
  const secondMethod = fetch(`${API}/products`, option)
      .then((response1) => { // Validation of the call to products
        return requestOk(response1);
  })
      .then((response2) => { // Request the first product by the Id
        const firstProduct = response2[0];
        const firstProductId = firstProduct.id;
      
        fetch(`${API}/products/${firstProductId}`, option)
        .then((response3) => { // Validation of the call to the first products
            return requestOk(response3);
      })
        .then((response4) => { // Request the category by the Id
        const category = response4.category;
        const categoryId = category.id;
  
        fetch(`${API}/categories/${categoryId}`)
        .then((response5) => { // Validation of the call to the category
          return requestOk(response5);
        })
        .then((response6) => {
            console.log(firstProduct);
          console.log(firstProduct.title);
          console.log(response6.name);
        })
        .catch((error) => {
          console.error(error);
        })
      })
      .catch((error) => {
        console.error(error);
      })
    })
      .catch((error) => {
        console.error(error);
  });