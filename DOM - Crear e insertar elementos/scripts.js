const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo", "Valor extra"]

const title = document.getElementById("title")
const daysList = document.getElementById("daysList")
const selectDays = document.getElementById("daysSelect")



// daysList.appendChild(itemList)

title.innerHTML = "DOM - <span>Crear e insertar elementos I</span>"

const fragment = document.createDocumentFragment()

// for(const day of days){
//     const itemList = document.createElement("LI")
//     itemList.textContent = day
//     fragment.appendChild(itemList)
// }

for (const day of days) {
    const selectItem = document.createElement("option")
    selectItem.setAttribute("value", day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}
// daysList.appendChild(fragment)
selectDays.appendChild(fragment)