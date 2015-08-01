function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
	var num = 0;
	var sign = 0;
	var obj = {};
	for(var i = 0; i < collection.length; i++) {
	//	compare(collection[i],result);
		for(num = 0; num < result.length; num++) {
			if(result[num].key === collection[i]) {
				result[num].count ++;
				sign =1;
				break;
			}
			sign = 0;
		}
		if(sign === 0) {
			obj = {key:collection[i], count:1};
			result.push(obj);
		}
	}
	return result;
}
