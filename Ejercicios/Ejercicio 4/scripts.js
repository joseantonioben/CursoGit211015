let num = parseInt(prompt("Introduce un número entero mayor que 1"))

let divisores = 0

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(`${num} no es primo`);
        divisores++
        break
    }
}

if (divisores == 0) console.log(`${num} es primo`);