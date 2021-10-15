const list = document.getElementById("list")
const newElement = document.createElement("li")
newElement.textContent = "Soy un nuevo elemento"

// list.insertBefore(newElement, list.children[1])

// list.children[0].insertAdjacentElement("beforebegin", newElement)
// list.insertAdjacentElement("afterbegin", newElement)
// list.insertAdjacentElement("beforeend", newElement)
// list.children[1].insertAdjacentElement("afterend", newElement)
// list.children[1].insertAdjacentHTML("afterend", "<li>Elemento adyacente insertado</li>")
// list.children[1].insertAdjacentText("afterend", "Elemento adyacente insertado")

// list.replaceChild(newElement, list.children[0])

// list.children[0].before(newElement)
// list.prepend(newElement)
// list.append(newElement)
// list.children[1].after(newElement)

// document.getElementById("child-to-replace").replaceWith(newElement)

// list.after(list.cloneNode(true))

// list.remove()

list.removeChild(list.children[1])