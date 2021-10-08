const add = function(num1, num2) {
	return (num1+num2)
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
	 let total=0 ;
   for(let i=0; i<arr.length; i++)
   {
     total = total + arr[i];
   }
   return total;
};

const multiply = function(arr) {
  let total=1 ;
  for(let i=0; i<arr.length; i++)
  {
    total = total * arr[i];
  }
  return total;
};

const power = function(num1, num2) {
  let powe =1 ;
	   while(num2)
     {
       powe = powe*num1;
       num2--;
     }
     return powe;
};

const factorial = function(num1) {
	  let fact =1;
    for(let i=1; i<=num1 ; i++)
    {
      fact = fact*i;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
