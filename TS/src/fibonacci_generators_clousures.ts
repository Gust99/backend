//FIBONACCI CON GENERATORS
function* fibonacci() {
    let x = 0;
    let y = 1;
    let aux = 0;

    while(1) {
        aux = x;
        x = y;
        y = y + aux;
        yield y;
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
    let f0 = 0;
    let f1 = 1;
    let aux = 0;

    return function() {
        aux = f0;
        f0 = f1;
        f1 = f0 + aux;
 
        return f1;
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