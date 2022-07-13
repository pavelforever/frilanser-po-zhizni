import intlTelInput from 'intl-tel-input';
import * as utils from '../../libs/utils.js';

import 'inputmask/dist/inputmask.min.js';

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

		input.addEventListener('countrychange', () => {
			input.value = '';
			const countryMask = input.placeholder.replace(/[0-9]/g, '9');
			Inputmask(countryMask).mask(input);
		});

		Inputmask('99 999-99-99').mask(input);
	});

	// $('input[name="phone"]').on('close:countrydropdown', function (e, countryData) {
	// 	$(this).val('');
	// 	$(this).mask($(this).attr('placeholder').replace(/[0-9]/g, 'd'));
	// });

	// $.mask.definitions['9'] = '';
	// $.mask.definitions['d'] = '[0-9]';

	// $('input[name=phone]').mask('dd ddd-dd-dd');
}
