let num = parseInt(prompt("Introduce un número mayor que 0"))
let factorial = 1

for (let i = num; i > 1; i--) {
    factorial *= i
}

console.log(`El factorial de ${num} es ${factorial}`);