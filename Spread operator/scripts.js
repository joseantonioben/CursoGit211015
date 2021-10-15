// const numbers = [-12, 2, 3, 23, 43, 2, 3]

// console.log(...numbers);

// const addNumbers = (a,b,c)=>{
//     console.log(a+b+c);
// }

// let numbersToAdd = [1,2,3]

// addNumbers(...numbersToAdd)

// let users = ["javier", "david", "rosa", "juan", "mercedes"]

// let newUsers = ["marta", "jaime", "laura"]

// users.push(newUsers[0], newUsers[1], newUsers[2])

// console.log(users);

// users.push(...newUsers)

// console.log(users);

// let arr1 = [1,2,3,4,5]
// let arr2 = [...arr1]

// console.log(arr2);

// let arr1 = [1,2,3,4,5]
// let arr2 = [6,7,8]

// let arrConcat = [...arr1,...arr2]
// console.log(arrConcat);

// const restParms = (...numbers) => {
//     console.log(numbers);
// }

// restParms(1,2,3,4,5,6,7,8)

const numbers = [1,2,3,4,5,1,2,3]

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

console.log([...new Set(numbers)]);