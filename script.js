let p=document.getElementsByClassName("p")
let button=document.getElementsByClassName("btn")

button.addEventListener("click",()=>{
  p.classList.toggle("active")
  console.log(click)
})