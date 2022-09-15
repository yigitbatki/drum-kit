var buttons = document.querySelectorAll("button");
console.log(buttons.length);
for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",handleClick);
}

function handleClick() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    animate(buttonInnerHTML);
}

document.addEventListener("keypress", (event) =>{
    makeSound(event.key);
    animate(event.key);
});

function makeSound (key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;   

        case "l":
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;            
    
        default:
            break;
    }

}

function animate(key) {
    var target = document.querySelector("."+key);
    target.classList.toggle("pressed");

    setTimeout(()=>{target.classList.toggle("pressed");},100);

    

}





//var audio = new Audio("./sounds/tom-1.mp3");
//audio.play();