let dayNight = document.querySelector('.dayNight');
let banner = document.querySelector('.banner');

dayNight.addEventListener('click', () => {
    banner.classList.toggle('night');
})

let typing = new Typed("#text", {
    strings: ["SOFTWARE ENGINEER","FULL STACK Developer ","MERN FULL STACK DEVELOPER"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 40,
    backDelay: 1000,
});