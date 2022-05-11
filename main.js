let text = document.querySelector(".text")


let color = document.querySelector(".choose-color")
let colors = ["magenta","brown","mediumblue","limegreen","orangered","saddlebrown"]
colors.forEach(element => {
    let option = document.createElement("option")
    option.value=element
    option.append(element)
    color.appendChild(option)
});
text.style.color = color.value
color.onchange = function () {
    text.style.color = this.value
    window.localStorage.setItem("color",this.value)
}
if(localStorage.color){
    text.style.color =localStorage.color;
    color.value = localStorage.color;
}



let size = document.querySelector(".choose-size")
for (let i=16; i<=30 ; i++) {
    let option = document.createElement("option")
    option.value=i
    option.append(i)
    size.appendChild(option)
}
size.onchange = function() {
    text.style.fontSize = `${+this.value}px`;
    window.localStorage.setItem("size",this.value)
}
if (localStorage.size) {
    text.style.fontSize = `${+localStorage.size}px`;
    size.value = localStorage.size
}



let type = document.querySelector(".choose-type")
let types = ["Open Sans", "Cairo", "Roboto"]
types.forEach(element => {
    let option = document.createElement("option")
    option.append(element)
    type.append(option)
});
type.onchange = function() {
    text.style.fontFamily = this.value
    window.localStorage.setItem("type",this.value)
}
if (window.localStorage.type) {
    text.style.fontFamily = localStorage.type;
    type.value = localStorage.type;
}