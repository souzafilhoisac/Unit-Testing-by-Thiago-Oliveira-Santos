export function myFunction(message?: string) {
	process.nextTick(async () => {
		try {
			return await Promise.reject('test');
		} catch (err) {
			console.log(err);
		}
	});
	console.log(message || 'Hello World');
}
