document.getElementById('convert-btn').addEventListener('click', function () {
		let inputValue = document.getElementById('number').value;

		if (!inputValue || isNaN(inputValue)) {
				document.getElementById('output').textContent = 'Please enter a valid number';
				return;
		}

		let num = parseInt(inputValue);

		if (num === -1) {
				document.getElementById('output').textContent = 'Please enter a number greater than or equal to 1';
		} else if (num >= 4000) {
				document.getElementById('output').textContent = 'Please enter a number less than or equal to 3999';
		} else {
				let romanNumeral = convertToRoman(num);
				document.getElementById('output').textContent = romanNumeral;
		}
});

function convertToRoman(num) {
		const romanNumerals = {
				M: 1000,
				CM: 900,
				D: 500,
				CD: 400,
				C: 100,
				XC: 90,
				L: 50,
				XL: 40,
				X: 10,
				IX: 9,
				V: 5,
				IV: 4,
				I: 1,
		};

		let result = "";

		for (let symbol in romanNumerals) {
				while (num >= romanNumerals[symbol]) {
						result += symbol;
						num -= romanNumerals[symbol];
				}
		}

		return result;
}
