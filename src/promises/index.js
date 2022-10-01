/*
The promises have 3 states:
1. pending
2. fulfilled
3. rejected
*/

const promise = new Promise(function (resolve, reject) {
    if(true) {
      resolve('Hey!');  	
    } else {
      reject('Ops!');
    }
  });
  
  const wishedCows = 15;
  const cows = 16;
  
  const countCows = new Promise(function (resolve, reject) {
    if(cows > 10) {
      resolve(`We have ${wishedCows} cows or more on the farm.`);
    } else {
      reject(`We haven´t ${wishedCows} on the farm.`);
    }
  });
  
  countCows
      .then((response) => {
          console.log(response);
  })
      .catch((error) => {
        console.log(error);
  })
      .finally(() => {
        console.log('The promise has finished');
  });
  
  const doTask = (iterations) => new Promise((resolve, reject) => {
      const numbers = [];
    
    for(let i = 0; i < iterations; i++) {
      const number = 1 + Math.floor(Math.random() * 6);
      
      numbers.push(number);
      
      if(number === 6) {
        reject({
          error: true,
          message: 'We have gotten 6',
        });
      }
    }
    
    resolve({
      error: false,
      value: numbers,
    });
  });
  
  doTask(10)
      .then((response) => console.log(response.value))
      .catch((error) => console.log(error.message))
      .finally(console.log('Finished the count'))