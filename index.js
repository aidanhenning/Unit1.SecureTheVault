let code1 = 0;
code1 = 7 + 3;

let code2 = 150 / 3 - 10;

let code3 = (10 % 9) + 30;

let message = "The vault has been secured. The combination is: ";

let codeA = code1 + "-" + code2 + "-" + code3;

let codeB = `${code1}-${code2}-${code3}`;

console.log(message + codeA + "-" + codeB);
