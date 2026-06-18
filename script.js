
// =========================
// APPLE STYLE FADE IN
// =========================

const cards = document.querySelectorAll(".story-card");

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.25
}

);

cards.forEach(card=>{
observer.observe(card);
});

// =========================
// EMOJI EFFECTS
// =========================

const emojiMap = {

heart:"💖",
sparkle:"✨",
book:"📚",
love:"❤️",
sun:"☀️",
birthday:"🎂",
kiss:"💋",
champagne:"🥂",
crown:"👑",
flower:"🌸"

};

function createEffect(type){

const emoji = emojiMap[type] || "✨";

for(let i=0;i<25;i++){

const el = document.createElement("div");

el.classList.add("emoji-pop");

el.innerHTML = emoji;

el.style.left =
Math.random()*100 + "vw";

el.style.top =
(window.innerHeight - 120) + "px";

el.style.animationDuration =
(2 + Math.random()) + "s";

document.body.appendChild(el);

setTimeout(()=>{

el.remove();

},3000);

}

}

// =========================
// CLICKABLE WORDS
// =========================

document.addEventListener(

"click",

(e)=>{

if(

e.target.classList.contains(
"clickable"
)

){

const effect =
e.target.dataset.effect;

createEffect(effect);

}

}

);

// =========================
// BONUS SECTION FADE-IN
// =========================

const bonusItems =
document.querySelectorAll(
".bonus-section li"
);

const bonusObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const items =
entry.target.querySelectorAll("li");

items.forEach((item,index)=>{

setTimeout(()=>{

item.style.opacity="1";

item.style.transform="translateY(0)";

},index*400);

});

}

});

},

{
threshold:0.4
}

);

const bonusSection =
document.querySelector(
".bonus-section"
);

if(bonusSection){

bonusObserver.observe(
bonusSection
);

}

// =========================
// INITIAL BONUS STYLES
// =========================

bonusItems.forEach(item=>{

item.style.opacity="0";

item.style.transform=
"translateY(25px)";

item.style.transition=
"all .8s ease";

});

// =========================
// FINAL BUTTON CELEBRATION
// =========================

const finalButton =
document.getElementById(
"finalButton"
);

if(finalButton){

finalButton.addEventListener(

"click",

()=>{

createEffect("birthday");

setTimeout(()=>{

createEffect("heart");

},300);

setTimeout(()=>{

createEffect("sparkle");

},600);

setTimeout(()=>{

createEffect("crown");

},900);

}

);

}

// =========================
// HERO BUTTON GLOW
// =========================

const heroButton =
document.querySelector(
".hero-button"
);

if(heroButton){

setInterval(()=>{

heroButton.animate(

[
{
transform:"scale(1)"
},
{
transform:"scale(1.04)"
},
{
transform:"scale(1)"
}
],

{
duration:2000
}

);

},2500);

}

// =========================
// PARALLAX HERO IMAGE
// =========================

const heroImage =
document.querySelector(
".hero-image"
);

window.addEventListener(

"scroll",

()=>{

const scrollY =
window.scrollY;

if(heroImage){

heroImage.style.transform =
`scale(1.08) translateY(${scrollY*0.08}px)`;

}

}

);

