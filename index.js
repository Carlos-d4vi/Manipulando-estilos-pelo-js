const body = document.querySelector('body')
function day(){
  body.classList = "day"
}
function night(){
  body.classList = "night"
}
function themeToggle(){
  body.classList.toggle("night") 
}