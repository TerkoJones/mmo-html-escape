const
	baseChars = {
		'<': '&lt;',
		'>': '&gt;',
		'&': '&amp;',
		'"': '&quot;',
		'\'': '&apos;',
		'\t': '   ',
		'\n': '<br>',
		'ñ': '&ntilde;',
		'Ñ': '&Ntiled;',
		'á': '&aacute;',
		'é': '&eacute;',
		'í': '&iacute;',
		'ó': '&oacute;',
		'ú': '&uacute;',
		'Á': '&Aacute;',
		'É': '&Eacute;',
		'Í': '&Iacute;',
		'Ó': '&Oacute;',
		'Ú': '&Uacute;',
		'ü': '&uuml;',
		'Ü': '&Uuml;',
		'€': '&euro',
	},
	basePattern = '<>&\'"ñÑá-úÁ-Ú€üÜ\t\n',
	specials = {
		'\\': '\\\\',
		'.': '\\.',
		'^': '\\^',
		'$': '\\$',
		'*': '\\*',
		'+': '\\+',
		'?': '\\?',
		'(': '\\(',
		')': '\\)',
		':': '\\:',
		'!': '\\!',
		'|': '\\|',
		'[': '\\[',
		']': '\\]',
		'{': '\\{',
		'}': '\\}'
	};
var
	escapeds = Object.assign({}, baseChars),
	pattern = basePattern,
	addeds = {},
	rex = new RegExp('[' + pattern + ']', "g"),
	spcrex = /\s{2,}/g;


module.exports = exports = escape;
exports.add = add;
exports.skipper = '\\';

function escape(str, ignore = false) {
	return ignore ?
		spaces(str.replace(rex, (char, offset) => {
			if (offset && str[offset - 1] === exports.skipper) return '\b' + char;
			return escapeds[char];
		})) :
		spaces(str.replace(rex, (char) => {
			return escapeds[char];
		}));
}

function spaces(str) {
	return str.replace(spcrex, (spcs) => {
		let l = spcs.length,
			r = '';
		if (l > 2) {
			r = '&emsp;'.repeat(Math.trunc(l / 3));
			l = l % 3;
		}
		if (l > 1) {
			r += '&ensp;';
			l -= 2;
		}
		if (l > 0) r += ' ';
		return r;
	})
}

function add(key, value) {
	if (typeof key === 'string') {
		if (!escapeds[key]) {
			addeds[key] = value;
			escapeds = Object.assign({}, baseChars, addeds);
			setPattern();
		}
	} else {
		for (let k in key) add(k, key[k]);
	}
}

function setPattern() {
	let str = basePattern,
		k;
	for (k in addeds) {
		str += specials[k] ? specials[k] : k;
	}
	rex = new RegExp('[' + str + ']', 'g');
}