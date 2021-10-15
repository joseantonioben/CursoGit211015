const indexedDB = window.indexedDB
const form = document.getElementById("form")
const tasks = document.getElementById("tasks")

if(indexedDB && form){
    let db
    const request = indexedDB.open("taskList,1")
    request.onsuccess = () => {
        db = request.result
        console.log("OPEN", db);
        readData()
    }

    request.onupgradeneeded = () => {
        db = request.result
        console.log("Create", db);
        const objectStore = db.createObjectStore("tasks", {
            keyPath: "taskTitle"
        })
    }

    request.onerror = (error) => {
        console.log("Error", error);
    }

    const addData = (data) => {
        const transaction = db.transaction(["tasks"], "readwrite")
        const objectStore = transaction.objectStore("tasks")
        const request = objectStore.add(data)
    }

    const readData = () => {
        const transaction = db.transaction(["tasks"], "readonly")
        const objectStore = transaction.objectStore("tasks")
        const request = objectStore.openCursor()

        request.onsuccess = (e) => {
            const cursor = e.target.result
            if(cursor){
                const taskTitle = document.createElement("p")
                taskTitle.textContent = cursor.value.taskTitle
                cursor.continue()
                const taskPriority = document.createElement("p")
                taskPriority.textContent = cursor.value.taskPriority
                cursor.continue()
            } else {
                console.log("No more data");
            }
        }
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data);
    })
}