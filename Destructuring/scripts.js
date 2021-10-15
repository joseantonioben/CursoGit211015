const person = {
    name: "Dorian",
    age: 20,
    email: "dorian@gmail.com"
}

//FORMA TRADICIONAL
// const name = person.name
// const age = person.age
// const email = person.email

//DESTRUCTURING
// const {name, age, email} = person
// const {name: nombre, age: edad, email: emilio} = person

// console.log(age, email, name);
// console.log(nombre, edad, emilio);

// const numbers = [1, 2, 3, 4]

// const [a, b, terceraPosicion] = numbers

// console.log(terceraPosicion);
// const printPerson = ({name: nombre}) => {
//     console.log(nombre);
// }

// printPerson(person)

const getUsers = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users")

    console.log(users);
}

getUsers()