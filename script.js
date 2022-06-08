var x = parseInt(prompt());
let b = " ";
console.log("Input: ", x);
while(x > 0) 
{   
    b += x % 10;
    x = Math.floor (x / 10);
}
console.log("Reverse Num: ", b);


