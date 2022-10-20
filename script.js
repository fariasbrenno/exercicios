let velocidade = function (velocity){
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