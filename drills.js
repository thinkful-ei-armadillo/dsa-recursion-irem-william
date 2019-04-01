'use strict';

function countingSheep(num){
  if(num === 0) {
    console.log('All sheep jumped over the fence');
    return;  
  }
  //base case 0 stop return
  //check the num if>0 another sheep
  //call recursive func for n-1
  if(num>0){
    console.log(`${num}: Another sheep jump over the fence`);
    countingSheep(num-1);
  }
}

// countingSheep(3);

function powerCalculator(base, exp){
  //base case when exponent = 0 
  //cause then it will just return base
  if(exp<0){
    console.log('exponent should be >= 0');
  }
  if(exp === 0){
    return 1;
  }
  //take base and recurse
  if(exp>0){
    return base*powerCalculator(base,(exp-1));
  }
}

console.log(powerCalculator(10,2));





