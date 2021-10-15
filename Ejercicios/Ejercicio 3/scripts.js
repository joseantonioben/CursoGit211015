let num = parseInt(prompt("Introduce un número entero superior a 0"))

for(let i=1;i<=num;i++){
    if(i%2==0){
        console.log(`${i} - es par`);
    }else{
        console.log(`${i} - es impar`);
    }
}