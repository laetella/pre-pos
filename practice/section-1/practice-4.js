function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  var num = 0;
  for(var elem_a=0; elem_a<collection_a.length; elem_a++) {
    for(var elem_b=0; elem_b<object_b.value.length; elem_b++) {
      if(collection_a[elem_a].key === object_b.value[elem_b]) {
        result[num++] = collection_a[elem_a].key;
      }
    }
  }
  return result;
}
