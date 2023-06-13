console.log("Print this out!");

let promise = new Promise(function (resolve, reject) {
  let sum = 2 + 3;
  if (sum == 5) {
    
    setTimeout(() => resolve("done"), 3000);
  } else {
    reject("failure");
  }
});

promise.then((result) => {
  console.log("The result is " + result);
}).catch((error) => console.log(error));


console.log("Print this again!");