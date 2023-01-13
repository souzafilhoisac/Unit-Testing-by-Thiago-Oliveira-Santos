/*
Vamos definir que precisamos criar um função que:
* Receba a string **"zero"** e retorne o número 0;
* Receba a string **"um"** e retorne o número 1;
* Receba a string **"dois"** e retorne o número 2;
* Receba qualquer outra string e retorne o número *NaN*;

Chamemos, então, essa função de **getNumber**;
*/

import { getNumber } from '@core/get-number';

describe(getNumber.name, () => {
	it('SHOULD be able to return 0 WHEN the string "zero" is passed', () => {
		const result = getNumber('zero');

		expect(result).toBe(0);
	});
	it('SHOULD be able to return 1 WHEN the string "um" is passed', () => {
		const result = getNumber('um');

		expect(result).toBe(1);
	});
	it('SHOULD be able to return 2 WHEN the string "dois" is passed', () => {
		const result = getNumber('dois');

		expect(result).toBe(2);
	});
	it('SHOULD be able to return NaN WHEN any other string is passed', () => {
		const result = getNumber('string test');

		expect(result).toBe(NaN);
	});
});
