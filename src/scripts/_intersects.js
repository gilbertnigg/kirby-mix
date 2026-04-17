// Select all elements with the class .__check-viewport
const elements = document.querySelectorAll(".__check-viewport");

// Create a new Intersection Observer
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// The element is intersecting the viewport
			// Get the div element of the entry
			const divElement = entry.target;
			// Perform your desired actions with the div element here
			divElement.classList.add("is-viewport");
		} else {
			// The element is not intersecting the viewport
		}
	});
});

// Observe each element
elements.forEach((element) => {
	observer.observe(element);
});
