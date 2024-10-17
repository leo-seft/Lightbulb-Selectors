const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");
const lightbulbs = [lightbulb1,lightbulb2,lightbulb3];

const counter = document.querySelector(".subtitle");
let count = 0;
for (let i = 0; i < lightbulbs.length; i++){
lightbulbs[i].addEventListener("click", function(event){
    count++;
    counter.innerHTML = "You've clicked the lights " + count + " times"
    lightbulbs[i].classList.toggle("active")
})
}
