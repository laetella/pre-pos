function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  var num = 0;
  var sign = 0;
  var obj = {};
  for(var i = 0; i < collection.length; i++) {
    if(collection[i].length === 1) {
        for(num = 0; num < result.length; num++) {
          if(result[num].name === collection[i]) {
            result[num].summary ++;
            sign =1;
            break;
          }
          sign = 0;
        }
        if(sign === 0) {
          obj = {name:collection[i], summary:1};
          result.push(obj);
        }
      }
    else {
        for(num = 0; num < result.length; num++) {
          if(result[num].name === collection[i].substring(0,1)) {
            if(collection[i].substring(1,2) === ":" || collection[i].substring(1,2) === "-") {
              result[num].summary += parseInt(collection[i].substring(2,3));
            } else {
              result[num].summary += parseInt(collection[i].substring(collection[i].indexOf("[")+1,collection[i].lastIndexOf("]")));
            }

            sign =1;
            break;
          }
          sign = 0;
        }
        if(sign === 0) {
          obj = {name:collection[i].substring(0,1), summary :parseInt(collection[i].substring(2,3))};
          result.push(obj);
        }
      }
    }
  return result;
}
