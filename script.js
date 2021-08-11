//Navbar
window.addEventListener("scroll", ()=> {
	let header = document.querySelector(".header");
	let scrollBtn = document.querySelector(".scroll-btn");
	header.classList.toggle("sticky", window.scrollY > 0);
	scrollBtn.classList.toggle("scroll-btn-sticky", window.scrollY > 0)

})

//Slider / Carousel
let slides = document.querySelectorAll(".slide");
let bars = document.querySelectorAll(".bar");
let nextBtn = document.querySelector(".fa-chevron-right");
let prevBtn = document.querySelector(".fa-chevron-left");
let indice = 1;

const showSlide = n => {
	if(n > slides.length) indice = 1;
	if(n < 1) indice = slides.length;

	for (let i = 0; i < slides.length; i++) {
		slides[i].style.animation = "desaparecer 1.5s forwards";
		slides[i].addEventListener("transitionend", ()=> {
			slides[i].style.display = "none";
		})
	}
	for (let i = 0; i < bars.length; i++) {
		bars[i].classList.remove("bar-active");
	}

	slides[indice-1].style.display = "block";
	slides[indice-1].style.animation = "aparecer 1.5s forwards";
	bars[indice-1].classList.add("bar-active");
}

const changeSlide = n => {
	showSlide(indice+=n)
}

const positionSlide = n => {
	showSlide(indice=n);
}

nextBtn.addEventListener("click",()=>{changeSlide(1)});
prevBtn.addEventListener("click",()=>{changeSlide(-1)});

for (let i = 0; i < bars.length; i++) {
	bars[i].addEventListener("click",()=> {
		positionSlide(i+1);
	})
}

positionSlide(1)
setInterval(()=> {
	positionSlide(indice+=1)
},5000)


//Mostrar al scrollear
const show = () => {
    let sections = document.querySelectorAll('.hidden');

    for (let i = 0; i < sections.length; i++) {

        let windowHeight = window.innerHeight;
        let seccionTop = sections[i].getBoundingClientRect().top; 
        let seccionPoint = 10;

        if(seccionTop < windowHeight - seccionPoint) {
            sections[i].style.transform = "none";
            sections[i].style.opacity = "1";
        }
    }
}
window.addEventListener('scroll', show)


//Responsive Menu 
let menuBtn = document.querySelector(".menu-btn")
menuBtn.addEventListener("click",()=> {
	let nav = document.querySelector(".nav")
	let navItems = document.querySelectorAll(".nav-item");
	nav.classList.toggle("show");
	for (let i = 0; i < navItems.length; i++) {
		navItems[i].addEventListener("click",()=> {
			if(nav.classList.contains("show")) nav.classList.remove("show");
		})
	}
})