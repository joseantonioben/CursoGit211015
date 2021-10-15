let numbers = [1,2,3,4,5]
let pares = []
let impares = []

for(let i = 0; i<numbers.length; i++){
    newNumber = Math.round(Math.random()*10)
    result = numbers[i]*newNumber
    console.log(`${numbers[i]} x ${newNumber} = ${result}`);
    (result%2==0) ? pares.push(result) : impares.push(result)
}

console.log(pares);
console.log(impares);