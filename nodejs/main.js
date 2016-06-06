var firstFunction = function () {
	console.log('Iam first');
};

var secondFunction = function() {
	firstFunction();
	console.log('im seconde');
};

secondFunction();

console.log('iam third');
