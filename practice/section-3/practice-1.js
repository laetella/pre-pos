function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  for(var elem_a = 0; elem_a < collection_a.length; elem_a++) {
    for(var elem_b = 0; elem_b < object_b.value.length; elem_b++) {
      if(collection_a[elem_a].key === object_b.value[elem_b]) {
        collection_a[elem_a].count --;
        break;
      }
    }
  }
  return collection_a;
}
