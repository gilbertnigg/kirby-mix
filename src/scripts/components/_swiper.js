// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import '../../styles/blocks/_swiper.css';

// init Swiper:
document.querySelectorAll(".swiper").forEach((swiperEl) => {
	let swiperParentEl = swiperEl.parentElement;
	new Swiper(swiperEl, {
		modules: [Navigation, Pagination],
		pagination: {
			el: swiperEl.querySelector(".swiper-pagination"),
			clickable: true,
		},
		navigation: {
			prevEl: swiperParentEl.querySelector(".swiper-button-prev"),
			nextEl: swiperParentEl.querySelector(".swiper-button-next"),
		},
	});
});
