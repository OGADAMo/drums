let crashRide = document.querySelector("#crash-ride");
let hiHatTop = document.querySelector("#hihat-top");

const animationCrashOrRide = () => {
    crashRide.style.transform = "rotate(0deg) scale(1.5)";
}

const animationHiHatClosed = () => {
    hiHatTop.style.top = "171px";
}

window.addEventListener("mousemove", (position)=>  {
    let x = position.x;
    let y = position.y;

    if(x < 530 && x > 420 && y < 340 && y > 280){ // G
        document.querySelector(".instrument h1").innerText = "Mid Tom"
        
    }
    if(x < 630 && x > 550 && y < 360 && y > 300){ // H
        document.querySelector(".instrument h1").innerText = "tom-high"
        
        
    }
    if(x < 720 && x > 630 && y < 380 && y > 340){ // J
        document.querySelector(".instrument h1").innerText = "snare"
        
    }
    if(x < 440 && x > 350 && y < 480 && y > 360){ // F
        document.querySelector(".instrument h1").innerText = "tom-low"
        
    }
    

    
    console.log("Pomakko si " + position.x, position.y);
    
})

window.addEventListener("keydown",(event) => {
    let code = event.keyCode;
    let audio = document.querySelector(`audio[data-key='${code}']`);
    
    if(!document.querySelector(`div[data-key="${code}"]`)) return;
    
    audio.currentTime = 0;
    audio.play()

    switch(code) {
        case 69:
        case 82:
            animationCrashOrRide();
            break;
        case 75:
        case 73:
            animationHiHatClosed();
            break;

        case 70:
            alert("F is clicked");

        case 86:
            changeColor();
    }
    key = document.querySelector(`div[data-key="${code}"]`).classList.add("playing")
   

});

const removeCrashRideTransition = e => {
    if(e.propertyName !== "transform" ) return;
    e.target.style.transform = "rotate(-7.2deg) scale(1.5)"
}

const removeHiHatTransition = e => {
    if(e.propertyName !== "top" ) return;
    e.target.style.top = "166px"
}

const removeKeyTransition = e => {
    if(e.propertyName !== "transform" ) return;
    e.target.classList.remove("playing");
}

const changeColor = () => {
    let bg = document.querySelector("html");
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 

    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);

    let randColor = randomNumber.padStart(6, 0);   
    bg.style.backgroundColor = `#${randColor.toUpperCase()}`;
    
    
}

let drumKeys = document.querySelectorAll  (".key");
drumKeys.forEach(key => {
    key.addEventListener("transitionend", removeKeyTransition)
})

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTransition);