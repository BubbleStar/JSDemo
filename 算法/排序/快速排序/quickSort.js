//用于交换数组两个位置的数
function swap(arr,i,j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

//将数组分成两部分，左半部分都小于pivot，右半部分都大于pivot，并返回pivot的下标
function partition(arr,left,right){
  var pivot = arr[Math.floor((left+right)/2)];
  var i = left;
  var j = right;
  while (i < j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }

    if(i < j){
      swap(arr,i,j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(arr,left,right) {

  left = (typeof left !== "number" ? 0 : left);
  right = (typeof right !== "number" ? arr.length-1 : right);

  var pivot = partition(arr,left,right);

  //对pivot左侧和右侧的部分进行递归排序
  if(left < right){
    if(left < pivot){
      quickSort(arr,left,pivot-1);
    }
    if(right > pivot){
      quickSort(arr,pivot+1,right);
    }
  }
}
var arr = [1,7,9,5,3,8,6,4];
quickSort(arr,0,7);
console.log(arr);
