// Write function called getRandomNumber that returns a promise
// In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// Invoke your async function

async function getRandomNumber() {
  let result = new Promise((resolve, reject) => {
    let random = Math.random(1, 100);
    setTimeout(() => resolve(random), 500);
  });
  let answer = await result;
  console.log(answer);
}

getRandomNumber();
