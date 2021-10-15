// let word = "Hola mundo"

// console.log(Array.from(word));
// console.log(word.split(""));

// const letters = ["a", "s", "d","f"]
// const numbers = [1,8,100,300,3]

// console.log(letters);
// console.log(letters.sort());
// console.log(numbers.sort());

// console.log(numbers.sort((a,b)=>a - b));
// console.log(numbers.sort((a,b)=>a + b));
// console.log(numbers.sort((a,b)=>b - a));
// console.log(numbers.sort((a,b)=>b + a));

// const numbers = [1, 2, 3, 4, 5]

// numbers.forEach((number)=>console.log(number*2))
// numbers.forEach((number,index)=>console.log(`${number} está en la posición ${index}`))

// const words = ["HTML", "CSS", "JavaScript", "PHP"]

// console.log(words.some(word=>word.length>10));
// console.log(words.every(word=>word.length>3));

const numbers = [1, 2, 3, 4, 5]

// const numbers2 = numbers.map(number=>number*2)

// console.log(numbers2);

// const numbers2 = numbers.filter(word=>word>2)

// console.log(numbers2);

console.log(numbers.reduce((a,b)=>a+b));

const users = [
    {
        name: "user 1",
        online: true
    },
    {
        name: "user 2",
        online: true
    },
    {
        name: "user 3",
        online: false
    },
    {
        name: "user 4",
        online: false
    },
    {
        name: "user 5",
        online: false
    },
    {
        name: "user 1",
        online: true
    }
]

const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
},0)

console.log(`Hay ${usersOnline} usuarios conectados`);