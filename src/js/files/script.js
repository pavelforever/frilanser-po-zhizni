// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

const blocks = document.querySelectorAll('section');
// window.getComputedStyle(el).backgroundColor;

document.addEventListener('watcherCallback', function (e) {
	const entry = e.detail.entry;
	const targetElement = entry.target;
	const header = document.querySelector('header');

	blocks.forEach(block => {
		if (targetElement.classList.contains('_watcher-view')) {
			block.classList.add('bg-green');
			header.classList.add('bg-green');
		} else {
			block.classList.remove('bg-green');
			header.classList.remove('bg-green');
		}
	});
});
