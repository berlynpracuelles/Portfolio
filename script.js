const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const targetID = this.getAttribute("href");
        const targetSection = document.querySelector(targetID);

        const navHeight = document.querySelector("nav").offsetHeight;

        window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: "smooth"
        });
    });
});

const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove",(e)=>{
    if(glow){
        glow.style.left = e.pageX + "px";
        glow.style.top = e.pageY + "px";
    }
});

const typingElement = document.getElementById("typing");
const text = [
    "Computer science student"  
];

let i = 0;
let j = 0;
let currentText = "";

function typeEffect(){
    if(!typingElement) return;
    if(j < text[i].length){
        currentText += text[i][j];
        typingElement.textContent = currentText;
        j++;
        setTimeout(typeEffect,100);
    }
    else{
        setTimeout(()=>{
            currentText="";
            j=0;
            i=(i+1)%text.length;
            typeEffect();
        },1500);
    }
}
typeEffect();

document.addEventListener("click", function(e){
    const star = document.createElement("div");
    star.className = "spark";
    star.style.left = e.pageX + "px";
    star.style.top = e.pageY + "px";
    document.body.appendChild(star);
    setTimeout(()=>{
        star.remove();
    },600);
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

function zoomImage(img){
    const overlay=document.createElement("div");
    overlay.className="zoom-overlay";
    const zoomed=document.createElement("img");
    zoomed.src=img.src;
    overlay.appendChild(zoomed);
    overlay.onclick=()=>overlay.remove();
    document.body.appendChild(overlay);
}

function zoomVideo(video){
    const overlay = document.createElement("div");
    overlay.className = "zoom-overlay";
    const clonedVideo = video.cloneNode(true);
    clonedVideo.controls = true;
    clonedVideo.autoplay = true;
    clonedVideo.style.width = "85%";
    clonedVideo.style.height = "auto";
    overlay.appendChild(clonedVideo);
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
}