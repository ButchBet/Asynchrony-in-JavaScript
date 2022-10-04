// First
const fnAsync = () => {
    return new Promise((resolve, reject) => {
      (true) 
        ? setTimeout(() => resolve('Resolved.'), 2000) 
        : reject('Rejected.');
    });
  }
  
  async function catchResponse() {
    try {
        const response = await fnAsync();

        console.log(response)
    } catch(error) {
        console.log(error);
    }

    console.log('Hello');
  }
  
  console.log('Before');
  catchResponse();
  console.log('After');

