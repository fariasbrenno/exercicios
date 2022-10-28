/*let velocidade = function (velocity){
    return velocity*2;
}

let newVelocity = velocidade (40);
console.log (newVelocity);

function print(num){
    console.log("Resultado função callback "+num);
}
function soma(a, b, cb){
    let op = a+b;
    cb(op);
}

soma(5,5,print);

function calculo (a, b, cb){
    let calc = a+b;
    cb(calc);
}
calculo (10,5, (num) => {
    console.log("Resultado callback arrow function "+num)
})

function somador (a, b, cb) {
    let op = a+b;
    cb(op);
}
somador (10, 20, function (num) {
    console.log("Resultado callback com função anonima "+num);
});*/
let nave = ["Colossus", "Elemental", "Helmet"];
console.log(nave);

nave.push ("Super Nova");
console.log(nave);

nave.pop ();
console.log(nave);