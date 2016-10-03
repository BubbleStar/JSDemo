function insertionSort(arr) {
  var len = arr.length,
      value,    //存储当前要比较的值
      i,        //i存储了未排好序的当前位置
      j;      //j存储了已经排好序的当前位置
  for(i=0; i<len; i++){
    value = arr[i];

    for(j=i-1; j>-1 && arr[j]>value; j-- ){
      arr[j+1] = arr[j]
    }
    arr[j+1] = value;
	return arr;
  }
}

var arr = [2,3,7,1,5,4,9,8,6];
insertionSort(arr);
console.log(arr);  //输出[1, 2, 3, 4, 5, 6, 7, 8, 9]
