function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let course = document.querySelector(".detail-course")
let button = document.querySelector(".btn");

button.addEventListener('mouseover',()=>{
    course.style.display = "block"
})
button.addEventListener('click',()=>{
    course.style.display = "none"
})
