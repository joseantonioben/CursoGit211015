let names = ["Paco", "José", "Paula", "María"]

for(let i = 0; i<names.length; i++){
    if(names[i]==="Paula")
    
    console.log(names[i]);
}

for(let name of names){
    console.log(name);
}

for(let index in names){
    console.log(names[index]);
}