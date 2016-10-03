###冒泡排序思想
------
从尾到头依次比较，如果当前数字小于前面的数字，则进行交换。一次遍历完成后，最小的数字会被交换到最前面
 （如果是从头到尾依次比较，则遍历完成后，最大的数字被排到最后一位）

```
function bubbleSort(arr){

  var len = arr.length;

  for(let i=0; i<len-1; i++){
	//从尾到头依次比较，如果当前数字小于前面的数字，则进行交换
    for(let j=len-1; j>i; j--){
      if(arr[j] < arr [j-1]){
        swap(arr,j,j-1);
      }
    }
  }
}
```