const form = document.getElementById("form")
const keys = document.getElementById("keys")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // const person = {
    //     name: "Dorian",
    //     email: "dorian@gmail.com"
    // }

    // sessionStorage.setItem("person", JSON.stringify(person))

    localStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${ form.key.value }</option>`

    form.reset()
})

keys.addEventListener("change", () => {
    document.getElementById("infoValue").textContent = localStorage.getItem(keys[keys.selectedIndex].textContent)
})

localStorage.clear()
localStorage.removeItem("name")