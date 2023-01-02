var body = document.querySelector("body")
var mode = document.querySelector(".mode")
var main = document.querySelector("main")
var span = document.querySelector(".span")

mode.addEventListener("click", () => {

    body.classList.toggle("monthly");
})