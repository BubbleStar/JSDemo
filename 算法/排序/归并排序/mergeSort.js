//合并两个排好序的数组
function merge(left,right) {
  var result = [],
  l = 0,
  r = 0;    //l和r分别指向left和right数组

  while (l < left.length && r < right.length) {
    if(left[l] < right[r]){
      result.push(left[l++]);
    }else {
      result.push(right[r++])
    }
  }

  return result.concat(left.slice(l)).concat(right.slice(r));

}

function mergeSort(arr){
  if(arr.length < 2){
    return arr;
  }

  var middle = Math.floor(arr.length/2);

  var left = arr.slice(0,middle);
  var right = arr.slice(middle);

  var params = merge(mergeSort(left),mergeSort(right));
  params.unshift(0,arr.length);
   /*通过apply，将params数组的元素作为splice的参数一个个传入。
   是一个将数组拆分成单个元素作为参数传入的好方法*/
  arr.splice.apply(arr,params);

  return arr;
}

var arr = [2,3,7,1,5,4,9,8,6];
mergeSort(arr);
console.log(arr); //输出[1, 2, 3, 4, 5, 6, 7, 8, 9]
