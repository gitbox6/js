// check a number which is prime or not with for loop
let number = 11;
let prime = true;
for (let i = 2; i <= number - 1; i ++) {
   if (number % i === 0) {
      prime = false;
      break;
   }   
}

if (prime == true) {
   console.log(`${number} is a prime number`);
} else {
   console.log(`${number} is not a prime number`);
}


// find out non prime number between 2 to 50
for (let number = 0; number <= 50; number++) {
   let prime = true;
   for (let j = 2; j <=number - 1; j++) {
      if (number % j === 0) {         
         prime = false;
         break;
      }
      console.log
   }   
   if (prime == false) {
      console.log(number)
   } else  {
      console.log(number)
   }
}

// check a number which is prime or not with for loop
for (let fnum = 0; fnum <= 15; fnum ++) {
   let x = 2;
   let promise = true;
   while (x <= fnum - 1) {
      if (fnum % x === 0) {
         promise = false;
         break;
      }
      x ++
   }
   
   if(promise) {
      console.log(fnum)
   } else {
      console.log(fnum)
   }
}




