//FIBONACCI CON GENERATORS
function* fibonacci() {
    let x = 0;
    let y = 1;
    let aux = 0;

    while(1) {
        yield y;
        aux = x;
        x = y;
        y = y + aux;
    }
    
}
let fiboGen = fibonacci();
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());
console.log(fiboGen.next());

//FIBONACCI CON CLOUSURES
let fibo = function() {
    let x = 0;
    let y = 1;
    let aux = 0;

    return function() {
        aux = x;
        x = y;
        y = y + aux;
        return x;
    }
};

let fibo1 = fibo();

console.log(fibo1());
console.log(fibo1());
console.log(fibo1());
console.log(fibo1());
console.log(fibo1());
console.log(fibo1());
console.log(fibo1());
console.log(fibo1());