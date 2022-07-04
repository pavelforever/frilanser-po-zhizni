import intlTelInput from 'intl-tel-input';
import './inputmask.js';
import * as utils from '../../libs/utils.js';

const inputsPhone = document.querySelectorAll('input[name=phone]');

if (inputsPhone.length) {
	inputsPhone.forEach(input => {
		const iti = intlTelInput(input, {
			hiddenInput: 'phone',
			autoHideDialCode: true,
			separateDialCode: true,
			preferredCountries: ['by', 'ru', 'ua'],
			utilsScript: utils,
			initialCountry: 'by',
		});

		Inputmask('99 999-99-99').mask(input);

		input.addEventListener('countrychange', () => {
			input.value = '';
			const countryMask = input.placeholder.replace(/[0-9]/g, '9');
			Inputmask(countryMask).mask(input);
		});
	});
}
