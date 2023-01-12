export function printSomething(message?: string) {
	setTimeout(async () => {
		try {
			return await Promise.reject('test');
		} catch (err) {
			console.log(err);
		}
	}, 1);
	/*setImmediate(async () => {
		try {
			return await Promise.reject('test');
		} catch (err) {
			console.log(err);
		}
	});*/
	/*process.nextTick(async () => {
		try {
			return await Promise.reject('test');
		} catch (err) {
			console.log(err);
		}
	});*/
	console.log(message || 'Hello World');
}

/*
Fluxo de código: Fila de promessas:
<<< Promise setImmetiate tem peso de O(N) onde N é o número de promessas na fila
já que o setImmediate move todas as promessas uma posição a frente para poder
inserir a nova promessa
Promise 1
Promise 2
Promise 3
<<< Promise process.nextTick tem peso de O(1)

<<<Por ultimo o setTimeout também passaria já que estamos pedindo para que o código
seja executado após 1 milisegundo
*/
