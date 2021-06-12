let number1 = 25;
let number2 =40;
    number1 =40;
    number2=25;
        console.log (number1, number2);



let number = 367;
let firstD = (number - number%100)/100;
let lastD = number%10;
let middleD = ((number -ld)/10)%10;
    console.log (String(lastD)+String(firstD)+String(middleD));


let number = 1002;
let fd = (number%1000);
let sd = (number-fd)/10;
console.log(String(fd)+sd);

let first=45;
let second= -12;
let third= 0;
let fourth= 3;
let fifth = -15;
let result =(first+second+third+fourth+fifth)/5;
    console.log(result);


let FirstNumber = 12; 
let SecondNumber = 26;
let ThirdhNumber = 8;

if (FirstNumber<SecondNumber && FirstNumber<ThirdhNumber && SecondNumber<ThirdhNumber) {
    console.log (FirstNumber, SecondNumber, ThirdhNumber);
} else if (FirstNumber<SecondNumber && FirstNumber<ThirdhNumber && ThirdhNumber<SecondNumber){
    console.log (FirstNumber,ThirdhNumber, SecondNumber); 
} else if (SecondNumber<FirstNumber && SecondNumber<ThirdhNumber && FirstNumber<ThirdhNumber) {
    console.log (SecondNumber, FirstNumber, ThirdhNumber);
} else if ( SecondNumber<FirstNumber && SecondNumber<ThirdhNumber && ThirdhNumber<FirstNumber){
    console.log (SecondNumber,ThirdhNumber, FirstNumber)
} else if (ThirdhNumber<SecondNumber && ThirdhNumber<FirstNumber && SecondNumber<FirstNumber){
    console.log (ThirdhNumber, SecondNumber,FirstNumber );
} else {
    console.log (ThirdhNumber, FirstNumber, SecondNumber);
}

let n =+prompt ("Type", "");
let i=0;
let j =0;

if (n%2===0 && (!Math.floor(n/10))){ 
        i+=1;
    }

if ((n%3===0) && (n%10===1 )){
        j+=1;
}
