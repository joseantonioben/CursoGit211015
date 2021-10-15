let figure = prompt("Introduce la figura geométrica cuya área deseas calcular: triangle, rectangle or circle")

let base;
let height;
let radius;

switch(figure){
    case "triangle":
        base=prompt("Introduce la base del triángulo")
        height=prompt("Introduce la altura del triángulo")
        console.log(`El área del triángulo es ${(base*height)/2}`)
        break
    case "rectangle":
        base=prompt("Introduce la base del rectángulo")
        height=prompt("Introduce la altura del rectángulo")
            console.log(`El área del rectángulo es ${(base*height)}`)
        break
    case "circle":
        radius=prompt("Introduce el radio del círculo")
        console.log(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`)
        break
    default: console.log("La figura geométrica no es válida");
}