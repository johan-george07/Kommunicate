function number_reverse(number){
    let output = 0;
    let rem;

    while(number != 0){
	rem = number % 10;
    output= output * 10 + rem;
    number = Math.floor(number/10);
}

console.log("Reverse number : "+output);
}
let num = prompt("Enter the number to reverse:: ");
number_reverse(num);
