var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")
var container = document.querySelector(".container")

var addtask = document.getElementById("add-task")
var cancelpopup = document.getElementById("cancel-popup")

var tasktitleinput = document.getElementById("task-title-input")
var taskdateinput = document.getElementById("task-date-input")
var tasktimeinput = document.getElementById("task-time-input")
var taskdescriptioninput = document.getElementById("task-description-input")

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block"
  popupbox.style.display = "block"
})

addtask.addEventListener("click", function (event) {
  event.preventDefault()

  var div = document.createElement("div")
  div.setAttribute("class", "book-container")
  div.innerHTML = `
    <h2>${tasktitleinput.value}</h2>
    <h3>${taskdateinput.value}</h3>
    <h3>${tasktimeinput.value}</h3>
    <p>${taskdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>
  `
  container.append(div)

  popupoverlay.style.display = "none"
  popupbox.style.display = "none"

  alert("Task added successfully")
})

cancelpopup.addEventListener("click", function (event) {
  event.preventDefault()
  popupoverlay.style.display = "none"
  popupbox.style.display = "none"
  alert("Task cancelled")
})

function deletebook(event) {
  event.target.parentElement.remove()
}
