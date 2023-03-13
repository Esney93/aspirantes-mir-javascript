function suma (num){

    var total = num;

    for(let i = 1; i < num; i ++) {
        total = total + i;
    }

    return total
}

console.log(suma(4))
console.log(suma(10))
console.log(suma(15))