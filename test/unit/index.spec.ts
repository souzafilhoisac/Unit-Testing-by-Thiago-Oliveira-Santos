// import * as printSomethingLib from '@core/print-something';

const printSomething = jest.fn();
jest.mock('@core/print-something', () => ({ printSomething }));

describe('index.ts', () => {
	// beforeEach(() => {
	// 	jest.spyOn(printSomethingLib, 'printSomething').mockReturnValue();
	// });

	it('some test', () => {
		require('src/index');

		expect(printSomething).toHaveCallsLike([], ['my test message']);
		// expect(printSomethingLib.printSomething).toHaveCallsLike([], ['my test message']);

		// expect(printSomethingLib.printSomething).toBeCalledTimes(2);
		// expect(printSomethingLib.printSomething).toHaveBeenNthCalledWith(1);
		// expect(printSomethingLib.printSomething).toHaveBeenNthCalledWith(2);
	});
});
