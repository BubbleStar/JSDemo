function selectionSort(arr){
  var len = arr.length;
  var min;
  for(let i=0; i<len; i++){
    //将当前位置设为最小值
    min = i;
    //遍历数组，如果有更小的，则改变min
    for(let j=i+1; j<len; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }
    //检查遍历后的最小值位置是否有变化，如果有，就交换这两个位置的数值
    if(min != i){
      swap(arr,i,min);
    }
  }
}

//交换函数
function swap(arr,i,j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

var arr = [2,3,7,1,5,4,9,8,6];
selectionSort(arr);
console.log([...arr]);
