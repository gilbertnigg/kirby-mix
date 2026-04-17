// $ npm install masonry-layout

// Masonry
import Masonry from "masonry-layout";

const masonryElements = document.querySelectorAll(".__masonry");

if (masonryElements) {
	masonryElements.forEach(function (masonryElement) {
		var msnry = new Masonry(masonryElement, {
			// set itemSelector so .grid-sizer is not used in layout
			itemSelector: ".masonry-item",
			// use element for option
			gutter: ".masonry-gutter-sizer",
			columnWidth: ".masonry-sizer",
		});
	});
}
