(function() {
	Proto.removeAttr = function(key){
		return coll_each(this, function(node){
			node.attr[key] = null;
		});
	};
	Proto.attr = function(mix, val){
		if (arguments.length === 1 && is_String(mix)) {
			return this.length !== 0 ? this[0].attr[mix] : null;
		}
		function asString(node, key, val){
			node.attr[key] = _mask_ensureTmplFn(val);
		}
		function asObject(node, obj){
			for(var key in obj){
				asString(node, key, obj[key]);
			}
		}
		var fn = is_String(mix) ? asString : asObject;
		return coll_each(this, function(node){
			fn(node, mix, val);
		});
	};
	Proto.prop = function (key, val) {
		if (arguments.length === 1) {
			return this.length !== 0 ? this[0][key] : this[0].attr[key];
		}
		return coll_each(this, function(node){
			node[key] = val;
		});
	};
	Proto.removeProp = function(key){
		return coll_each(this, function(node){
			node.attr[key] = null;
			node[key] = null;
		});
	};
	Proto.tag = function(name) {
		if (arguments.length === 0)
			return this[0] && this[0].tagName;

		return coll_each(this, function(node){
			node.tagName = name;
		});
	};
	Proto.css = function(mix, val) {
		if (arguments.length <= 1 && typeof mix === 'string') {
			if (this.length == null)
				return null;

			var style = this[0].attr.style;
			if (style == null)
				return null;

			var obj = css_parseStyle(style);
			return mix == null ? obj : obj[mix];
		}

		if (mix == null)
			return this;

		var stringify = typeof mix === 'object'
			? css_stringify
			: css_stringifyKeyVal ;
		var extend = typeof mix === 'object'
			? obj_extend
			: css_extendKeyVal ;

		return coll_each(this, function(node){
			var style = node.attr.style;
			if (style == null) {
				node.attr.style = stringify(mix, val);
				return;
			}
			var css = css_parseStyle(style);
			extend(css, mix, val);
			node.attr.style = css_stringify(css);
		});
	};

	function css_extendKeyVal(css, key, val){
		css[key] = val;
	}
	function css_parseStyle(style) {
		var obj = {};
		style.split(';').forEach(function(x){
			if (x === '')
				return;
			var i = x.indexOf(':'),
				key = x.substring(0, i).trim(),
				val = x.substring(i + 1).trim();
			obj[key] = val;
		});
		return obj;
	}
	function css_stringify(css) {
		var str = '', key;
		for(key in css) {
			str += key + ':' + css[key] + ';';
		}
		return str;
	}
	function css_stringifyKeyVal(key, val){
		return key + ':' + val + ';';
	}

}());
