import { printSomething } from '@core/print-something';
import { promisify } from 'util';

const delay = promisify(setTimeout);

describe(printSomething.name, () => {
	/* mock do process.nextTick foi retirado para a validação do fluxo de código
	let callback: CallableFunction;*/

	beforeEach(() => {
		// Arrange
		jest.spyOn(console, 'log').mockReturnValue(undefined);
		// jest.spyOn(process, 'nextTick');
		/* mock do process.nextTick foi retirado para a validação do fluxo de código
		jest.spyOn(process, 'nextTick').mockImplementation(cb => callback = cb);*/
	});

	it('SHOULD be able to print "Hello World" WHEN no parameter is informed', async () => {
		//Act
		const result = printSomething();

		// Assert
		expect(result).toBeUndefined();
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('Hello World');
		// expect(process.nextTick).toBeCalledTimes(1);
		// expect(process.nextTick).toHaveBeenCalledWith(expect.any(Function));
		await delay(1);
		/*mock do process.nextTick foi retirado para a validação do fluxo de código
		await callback();*/
		expect(console.log).toHaveBeenCalledTimes(2);
		expect(console.log).toHaveBeenNthCalledWith(2, 'test');
	});

	it('SHOULD be able to print the informed string WHEN some parameter is informed', async () => {
		//Arrange
		const message = 'my test message';

		//Act
		const result = printSomething(message);

		// Assert
		expect(result).toBeUndefined();
		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('my test message');
		// expect(process.nextTick).toBeCalledTimes(1);
		// expect(process.nextTick).toHaveBeenCalledWith(expect.any(Function));
		await delay(1);
		/*mock do process.nextTick foi retirado para a validação do fluxo de código
		await callback();*/
		expect(console.log).toHaveBeenCalledTimes(2);
		expect(console.log).toHaveBeenNthCalledWith(2, 'test');
	});
});
