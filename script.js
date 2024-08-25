

let span = document.querySelector(".span")
console.log(span)
let button = document.querySelector(".btn")
console.log(button)

button.addEventListener("click", () => {

  span.classList.toggle("active")

})


