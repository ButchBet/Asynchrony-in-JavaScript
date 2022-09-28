// First 
function add(a, b) {
    return a + b;
}

function calc(a, b, cb) {
    return cb(a, b);
}

console.log(calc(1, 2, add));

// Second
setTimeout(function () {
  console.log('Hello JS');
}, 2000);

// Third
setTimeout(gretting, 2000, 'ButchBet');

function gretting(name = 'User') {
  console.log(`Hello ${name}.`);
}

// Fourth
const doTask = (iterations, callback) => {
  const numbers = [];
  for (let i = 0; i < iterations; i++) {
    const number = 1 + Math.floor(Math.random() * 6);
    numbers.push(number);
    if (number === 6) {
      /* Error, 6 has been found */
      callback({
        error: true,
        message: "6 has been found"
      });
      return;
    }
  }
  /* The loop finished and the 6 has not been found */
  return callback(null, {
    error: false,
    value: numbers
  });
}

doTask(10, function(err, result) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("Correct rolls: ", result.value);
});