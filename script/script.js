const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

});
document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");
        hamburger.classList.remove("active");

    });

});