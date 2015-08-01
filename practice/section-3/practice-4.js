function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = [];
  var sign = false;
  for(var elem_a = 0; elem_a < collection_a.length; elem_a ++) {
    if(collection_a[elem_a].length == 1) {
      for(var elem_c = 0; elem_c < collection_c.length; elem_c++) {
        if(collection_a[elem_a] === collection_c[elem_c].key) {
          collection_c[elem_c].count++;
          sign = true;
          break;
        }
        sign = false;
      }
      if(sign === false) {
        collection_c[collection_c.length++] = {key:collection_a[elem_a], count:1};
      }
    } else {
      for(var elem_c = 0; elem_c < collection_c.length; elem_c++) {
        if(collection_a[elem_a].substring(0,1) === collection_c[elem_c].key) {
          collection_c[elem_c].count = parseInt(collection_a[elem_a].substring(2,3));
          sign = true;
          break;
        }
        sign = false;
      }
      if(sign === false) {
        collection_c[collection_c.length++] = {key:collection_a[elem_a].substring(0,1), count:parseInt(collection_a[elem_a].substring(2,3))};
      }
    }

  }
  for(var elem_c = 0; elem_c < collection_c.length; elem_c++) {
    for(var elem_b = 0; elem_b < object_b.value.length; elem_b++) {
      if(collection_c[elem_c].key === object_b.value[elem_b]) {
        if(collection_c[elem_c].count >= 3) {
          collection_c[elem_c].count -= parseInt(collection_c[elem_c].count/3);
          break;
        }
      }
    }
  }
  return collection_c;
}
