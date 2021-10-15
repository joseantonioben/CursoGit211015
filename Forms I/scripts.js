const form = document.getElementById("form")
const button = document.getElementById("button")

const name = document.getElementById("name")
const email = document.getElementById("email")
const gender = document.getElementById("gender")
const terms = document.getElementById("terms")

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

form.addEventListener("submit", (e) => {
    // e.preventDefault()
    validateForm()
})

name.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.name = true
})

email.addEventListener("change", (e) => {
    if (e.target.value.trim().length > 0) formIsValid.email = true
})

gender.addEventListener("change", (e) => {
    if (e.target.checked == true) formIsValid.gender = true
})

terms.addEventListener("change", (e) => {
    formIsValid.terms = e.target.checked
    e.target.checked ? button.removeAttribute("disabled") : button.setAttribute("disabled", true)
})

const validateForm = () => {
    console.log(formIsValid);
}