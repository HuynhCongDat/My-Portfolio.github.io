
//------------------------------


//scroll navbar

function navbarScroll(){
	var mybutton = document.getElementById("myBtn");
	window.onscroll = function(){myFunction()};

	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    navbar.classList.add("sticky");
	    mybutton.style.display = "block";
	  } else {
	    navbar.classList.remove("sticky");
	    mybutton.style.display = "none";
	  }

	}
	myFunction();


}
navbarScroll();


function scrollToTop (duration) {
    // cancel if already on top
	if (document.scrollingElement.scrollTop === 0) return;

	const totalScrollDistance = document.scrollingElement.scrollTop;
	let scrollY = totalScrollDistance, oldTimestamp = null;

	function step (newTimestamp) {
	    if (oldTimestamp !== null) {
	        // if duration is 0 scrollY will be -Infinity
	        scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
	        if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
	        document.scrollingElement.scrollTop = scrollY;
	    }
	    oldTimestamp = newTimestamp;
	    window.requestAnimationFrame(step);
	}
	window.requestAnimationFrame(step);
}

//menu navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


