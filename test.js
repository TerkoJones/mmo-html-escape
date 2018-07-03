const escape = require('./index.js');
escape.add({
	'{': '&llave;'
})
console.log(escape('los\t\t huevos"'));