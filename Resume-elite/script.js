// typing effect
const text = ["Full Stack Developer", "Frontend Designer", "AI Enthusiast", "Future Software Engineer"];

let count= 0;
let index =0;
let currentText="";
let letter ="";

(function type(){
    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type,1000);
    }else{
        setTimeout(type, 120);
    }

}) ();

//Scroll Animation
const observer = new IntersectionObserver(entries=> {
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(sec=>{
    sec.classList.add("hidden");
    observer.observe(sec);
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggle.textContent = "🌙";
    }else {
        toggle.textContent = "☀️";
    }
};

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },200);
});

const glow=document.getElementById("cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

document.querySelectorAll(".card").forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = ((y / rect.height) - 0.5) * -14;
    card.style.transform =
    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
});

card.addEventListener("mouseleave",()=>{
    card.style.transform =
    `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
  });
});

const counters = document.querySelectorAll(".counter");
counters.forEach(counter=>{
    const update = ()=>{
    const target = +counter.dataset.target;
    const current = +counter.innerText;

    const inc = Math.ceil(target / 60);
    if(current < target){
    counter.innerText = current + inc;
    setTimeout(update, 25);
}else{
    counter.innerText = target;
  }
};

update();
});