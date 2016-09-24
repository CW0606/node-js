// 本部分主要学会使用js中的全局对象
/////////////////////////////////////////////////////
///////////////全局变量值//////////////////////////////
// Infinity
// NaN
// undefined
// null literal
/////////////////////////////////////////////////////
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

function logUndefined(x) {
	if (x === undefined){
		console.log('x is undefined!')
	}else {
		console.log('x:%s', x);
	}
}

function logUndefinedWithTypeOf(x) {
	if (typeof x === 'undefined'){
		console.log('x is undefined!')
	}else {
		console.log('x:%s', x);
	}
}

function logUndefinedWithVoid(x) {
	if ( x === void 0){
		console.log('x is undefined!')
	}else {
		console.log('x:%s', x);
	}
}

function testValueProperties() {
	logInfinty();
	logNaN();
	var x;
	logUndefined(x);
	logUndefinedWithTypeOf(x);
	logUndefinedWithVoid(x);
	var y = 10;
	logUndefined(y);
	logUndefinedWithTypeOf(y);
	logUndefinedWithVoid(y);
}

/////////////////////////////////////////////////////
///////////////全局函数///////////////////////////////
// eval 传入一个字符串将其解析成js语句,若传入的不是string,则返回原值
// ueval 传入一个方法，转换为字符串
// isFinite
// isNaN 检测参数是否可以转化为数字,若不能则返回True,否则返回False.
// parseFloat
// parseInt
// decodeURI
// decodeURIComponet
// encodeURI
// encodeURIComponet
// escape
// unescape
function testEval() {
	var logHelloWord = "console.log('Hello World')"
	eval(logHelloWord)
	var sayILoveChenao = "console.log('I Love Chenao')"
	eval(sayILoveChenao)
	var sayChenaoLoveZhao = "console.log('Chenao Love Zhao')"
	eval(sayChenaoLoveZhao)
}
function testGeval() {
  var x = 2, y = 4;
  console.log(eval("x + y"));  // Direct call, uses local scope, result is 6
  var geval = eval;
  console.log(geval("x + y")); // Indirect call, uses global scope, throws ReferenceError because `x` is undefined
}
x = 3;
y = 4;
testGeval()
