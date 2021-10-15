const text = document.getElementById("text").textContent
const regEx = /lorem/gi
const regEx2 = new RegExp ("lorem", "gi")
const regEx3 = new RegExp ("/lorem/", "gi")

console.log(regEx.test(text));
console.log(text.includes("Lorem"));