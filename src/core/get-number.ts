/*
Vamos definir que precisamos criar um função que:
* Receba a string **"zero"** e retorne o número 0;
* Receba a string **"um"** e retorne o número 1;
* Receba a string **"dois"** e retorne o número 2;
* Receba qualquer outra string e retorne o número *NaN*;

Chamemos, então, essa função de **getNumber**;
*/

enum MappedNumbers {
	zero = 0,
	um = 1,
	dois = 2,
}

export function getNumber(numberName: string): number {
	const result = MappedNumbers[numberName as keyof typeof MappedNumbers];
	// switch(numberName) {
	// case 'zero':
	// 	return 0;
	// case 'um':
	// 	return 1;
	// case 'dois':
	// 	return 2;
	// default:
	// 	return NaN;
	//}

	return result === undefined ? NaN : result;
}
