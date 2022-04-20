/*
    ANY
    ===
    Usar any es una mala practica
    Any no tiene un control sobre las operaciones de sus variables
    tsconfig tiene un flag llamado noImplicitAny para impedir el uso de any en el codigo
*/
let a: any = 3;
let b: any = '3';
let c = a + b; //Se infiere el tipo any, no da error



/*
    UNKNOWN
    =======
    Usar unknown en vez de any solo cuando no se pueda determinar el tipo
    Unknown tiene un control sobre las operaciones de sus variables
*/
let a1: unknown = 3;
//let b1 = a1 + 30; //Error, no se puede sumar number con unknown
if(typeof a1 === 'number') {
    let b1 = a1 + 3;
}



/*
    BOOLEAN
    =======
    Siempre usar const, usar let solo cuando no se pueda usar const
    Type literal, un tipo que solo representa un valor
    No es necesario definir el tipo explicitamente en inicializaciones
    solo en declaraciones porque TS infiere el tipo a partir del valor asignado
*/
let a2: boolean = true;
let b2 = false;
let c2: true = true; //Tipo true
//let d2: true = false; //Error



/*
    NUMBER
    ======
*/
let a3: number = 3;
let b3 = Infinity * a3; //Se infiere el tipo number
let c3 = 3; //Se infiere el tipo number
let d3: 3 = 3; //Type literal, tipo 3
let e3: 1_000_000 = 1_000_000 //type literal, formato de number con separadores de miles



/*
    BIGINT
    ======
    Esta disponible desde ECMA 2020, en tsconfig.json usar es2020
    Se usa la letra n despues de un numero entero para indicar que es bigint
*/
let a4 = 3n; //TS infiere el tipo bigint
let b4: bigint = 3n;
//let c4: bigint = 3; //error, no se puede asignar 3 a bigint



/*
    STRING
    ======
*/
let a5 = 'asdf'; //TS infiere el tipo string
let b5: string = 'asdf';
let c5 = a5 + ' ' + b5;
//let d5: "a" = "b"; //type literal, error



/*
    SYMBOL
    ======
    Un Symbol solo puede ser igual a si mismo
    Son inmutables y unicos
*/
let a6 = Symbol("a");
let b6: symbol = Symbol("a");
let c6 = a6 === b6; //boolean false
let d6 = a6 === a6; //boolean true

const aa = Symbol("a");
const e6: unique symbol = Symbol("asdf"); //typeof e6
//let f6: unique symbol = Symbol("asdf"); // error

let f6 = a6 === a6;
//let g6 = e6 === aa; //Error, siempre se retorna false



/*
    OBJECTS
    =======
*/
let a7: object = {
    b: "b"
}; //Tipo Object
//a7.b; //Error

let b7 = {
    c: {
        d: 'd'
    }
}; //Tipo {c: {d: string}}
b7.c;

let user: {
    name: string,
    password: string
} = { name: "a", password: "a"}; //Tipo {name:string, password:string}

class User {
    constructor(
        public name: string,
        public password: string
    ) {}
}
user = new User("a","a"); //Tipo {name:string, password:string}, ya que tienen la misa estructura no genera error
let p = new User("a","a"); //Tipo User

let a8: {
    b: number,
    c?: string, //Atributo opcional
    [key:number]: boolean, //Index signature
};
a8 = {
    b: 1,
    1: true,
    2: false
}



/*
    INDEX SIGNATURE
    ===============
*/
let seats: {
    [seatCode: string]: string
} = {
    "A1": "Client 1",
    "A2": "Client 2",
    "A3": "Client 3"
};



/*
    TYPE ALIASES
    ============
    Tienen block scope
*/
type Age = number;
type Person1 = {
    name: string,
    age: Age
}
let age: Age = 55; //Type number
let p1: Person1 = { //Type Person1
    name: "a",
    age: age //Type number
}

type Color = "red";
//type Color = "blue";//Error, identificador duplicado

{
    type Color = "blue"; //Tipo con el mismo identificador pero en scope de bloque
}



/*
    TYPES UNION AND INTERSECTION
    ===========================
*/
type Cat = { name: string, catAction1: string }
type Dog = { name: string, dogAction1: string, dogAction2: number }
type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

let a9: CatOrDog = {//Cat
    name: "a",
    catAction1: "a"
}
a9 = {//Dog
    name: "a",
    dogAction1: "a",
    dogAction2: 1
}
a9 = {//Cat mezclado con Dog, uno de los dos debe estar completo
    name: "a",
    catAction1: "a",
    dogAction1: "a",
}
a9 = {//Cat y Dog, todos los atributos de ambos tipos
    name: "a",
    dogAction1: "a",
    dogAction2: 1,
    catAction1: "a"
}

let b9: CatAndDog = {//Cat y Dog, todos los atributos de ambos tipos
    name: "a",
    dogAction1: "a",
    dogAction2: 1,
    catAction1: "a"
}



/*
    ARRAYS
    ======
    Mantener arrays homogeneos, no mezclar tipos en arrays
*/
let a10 = [1,2,3]; //Tipo number[]
let b10 = ["a","b","c"]; //Tipo string[]
let c10: string[] = ["a"];
let d10 = [1,"a"]; //Tipo (string | number)[]

let e10 = []; //Tipo any[]
e10.push(1); //Tipo any[]
console.log(typeof e10); //Tipo object
e10.push("a"); //Tipo any[]
console.log(typeof e10); //Tipo object

e10.map((_) => {
    if(typeof _ === 'number') {
        return _ * 3;
    }
    //return _ * 3; //Error porque el tipo de _ es (string | number)
    return _.toUpperCase();
});

function getArray() {
    let array = []; //Tipo any
    array.push("a"); //Tipo any
    array.push(1); //Tipo any
    return array; //Tipo (string | number) ya que se retorna un vector solo con estos tipos
}
let array = getArray(); //Tipo (string | number)



/*
    TUPLES
    ======
    Son inmutables pero no reasignables
*/
let a11: [number] = [2];
let b11: [string, string, number] = ["a","a",3];
let c11: [number, number?][] = [
    [3.14],
    [12,14],
    [5]
];
let d11: ([number] | [number,number])[] = [
    [3.14],
    [12,14],
    [5]   
];
let e11: [string, ...string[]] = ["a"];
e11 = ["a","a","a"];

let f11: [number, boolean, ...string[]] = [1,true];
f11 = [1,true,"a","a"];



/*
    READ ONLY ARRAYS AND TUPLES
    ===========================
    const solo impide la reasignacion pero no la mutabilidad, un vector no se podria reasignar pero si incrementar en elementos
    readonly impide la mutabilidad y la reasignacion, un vector no podria ser reasignado ni incrementar en elementos
*/
let a12: readonly number[] = [1,2,3]; //Tipo readonly number[]
let b12: readonly number[] = a12.concat(4); //Tipo readonly number[], concat toma los valores del array y los concatena con otro
let c12 = a12.slice(); //Tipo number[], slice retorna una seccion del vector
//a12[0] = 3; //Error porque es readonly
//a12.push(2); //Error porque es readonly

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;



/*
    null: Ausencia de un valor
    undefined: Variable no definida
    void: funcion que no retorna un valor
    never: funcion que nunca retorna
*/
function f1(x: number) {//Funcion que retorna null
    if(x < 10) {
        return x;
    }
    return null;
}
function f2() { //Funcion que retorna undefined
    return undefined;
}
function f3() { //Funcion que retorna void
    let a = 3 + 5;
}
function f4(): never { //Funcion que retorna never
    throw new Error();
}
function f5() { //Funcion que retorna never
    while(true) {}
}



/*
    ENUMS
    =====
    Por convencion los nombres de enums deben empezar con mayuscula y estar en singular
    las llaves de los enums deben empezar con mayuscula
    Solo usar enums con const y sin asignaciones numericas, solo strings
*/
