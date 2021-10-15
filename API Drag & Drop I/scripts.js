const smile = document.getElementById("smile")
const dropZone = document.getElementById("drop-zone")

// smile.addEventListener("dragend", () => {
//     console.log("Drag End");


// })

// dropZone.addEventListener("dragover", (e) => {
//     e.preventDefault()
//     console.log("Drag over");
// })

// dropZone.addEventListener("drop", (e) => {
//     e.preventDefault()
//     console.log("Drop");
// })

dropZone.addEventListener("dragleave", () => {
    console.log("Drag Leave");
})