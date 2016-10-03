###选择排序思想
------
假设第一个位置是最小数字，然后遍历整个数组，记下最小数字的位置，遍历到结尾后再判断是否进行交换

```
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
```