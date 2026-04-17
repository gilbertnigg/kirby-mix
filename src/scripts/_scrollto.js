// Smoothscroll Polyfill
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

// Get all anchor tags
const anchorTags = document.querySelectorAll(".__scrollto");
// const anchorTags = document.querySelectorAll('article a[href^="#"]');

// Add click event listener to each anchor tag
anchorTags.forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault(); // Prevent default anchor tag behavior

		const targetQuery = anchor.hash; // Get the target id from the anchor tag
		console.log(targetQuery);
		const targetElement = document.querySelector(targetQuery); // Find the target element
		if (targetElement) {
			// Scroll smoothly to the target element
			targetElement.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		}
	});
});

// Check if the window has been scrolled
const scrollMin = 100;
window.addEventListener(
	"scroll",
	() => {
		if (
			window.scrollY >= scrollMin &&
			!document.documentElement.classList.contains("is-scrolled")
		) {
			document.documentElement.classList.add("is-scrolled");
		} else if (
			window.scrollY < scrollMin &&
			document.documentElement.classList.contains("is-scrolled")
		) {
			document.documentElement.classList.remove("is-scrolled");
		}
	},
	true,
);
