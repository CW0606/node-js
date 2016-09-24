// 本部分主要学会使用js中的全局变量
// Infinity
// NaN
// undefined
// null literal
function logInfinty() {
	console.log(Infinity); // Infinity
	console.log(Infinity + 1); // Infinity
	console.log(Math.pow(10,1000)); // Infinity
	console.log(Math.log(0)); // Infinity
	console.log(1 / Infinity) ; // 0
}

function logNaN() {
	function valuesIsNaN(v) {
		return v !== v;
	}
	console.log(valuesIsNaN(1))
	console.log(valuesIsNaN(NaN))
	console.log(valuesIsNaN(Number.NaN))
}

function test() {
	logInfinty()
	logNaN()
}

test()
