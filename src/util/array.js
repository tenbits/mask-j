var arr_eachAny,
	arr_unique;

(function(){

	arr_eachAny = function(mix, fn) {
		if (is_ArrayLike(mix) === false) {
			fn(mix);
			return;
		}
		var imax = mix.length,
			i = -1;
		while ( ++i < imax ){
			fn(mix[i], i);
		}
	};
	
	(function() {
		arr_unique = function(array) {
			hasDuplicate_ = false;
			array.sort(sort);
			if (hasDuplicate_ === false) 
				return array;
			
			var duplicates = [],
				i = 0,
				j = 0,
				imax = array.length - 1;
	
			while (i < imax) {
				if (array[i++] === array[i]) {
					duplicates[j++] = i;
				}
			}
			while (j--) {
				array.splice(duplicates[j], 1);
			}
	
			return array;
		};
		
		var hasDuplicate_ = false;
		function sort(a, b) {
			if (a === b) {
				hasDuplicate_ = true;
				return 0;
			}
			return 1;
		}
	}());
	
}());
