// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const blocks = document.querySelectorAll('section');
const header = document.querySelector('header');
// window.getComputedStyle(el).backgroundColor;

// document.addEventListener('watcherCallback', function (e) {
// 	const entry = e.detail.entry;
// 	const targetElement = entry.target;

// 	blocks.forEach(block => {
// 		if (targetElement.classList.contains('_watcher-view')) {
// 			block.classList.add('bg');
// 			header.classList.add('bg');
// 		} else {
// 			block.classList.remove('bg');
// 			header.classList.remove('bg');
// 		}
// 	});
// });
