window.addEventListener("load", () => {
	document.querySelector(".menu-btn").addEventListener("click", () => {
		document.querySelector(".nav-list").classList.toggle("open");
		document.querySelector(".nav-links").classList.toggle("open");
		document.querySelector(".close-container").classList.toggle("open");

	})
	document.querySelector(".close").addEventListener("click", () => {
		document.querySelector(".nav-list").classList.toggle("open");
		document.querySelector(".nav-links").classList.toggle("open");
		document.querySelector(".close-container").classList.toggle("open");

	})
})



