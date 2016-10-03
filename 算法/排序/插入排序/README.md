###插入排序思想
------
将数组分成两部分，前一部分已排序，后一部分未排序。将后一部分的数一个个插入前半部分，最终完成排序

```
function insertionSort(arr) {
  var len = arr.length,
      value,    //存储当前要比较的值
      i,        //i存储了未排好序的当前位置
      j;        //j存储了已经排好序的当前位置
  for(i=0; i<len; i++){
    value = arr[i];

    for(j=i-1; j>-1 && arr[j]>value; j-- ){
      arr[j+1] = arr[j]
    }
    arr[j+1] = value;
  }
}
```