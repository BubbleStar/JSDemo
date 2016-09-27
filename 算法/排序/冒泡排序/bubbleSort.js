function bubbleSort(arr){

  var len = arr.length;

  for(let i=0; i<len-1; i++){
    for(let j=len-1; j>i; j--){
      if(arr[j] < arr [j-1]){
        swap(arr,j,j-1);
      }
    }
  }
}

function swap(arr,i,j){
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}

var arr = [2,3,7,1,5,4,9,8,6];
bubbleSort(arr);
console.log([...arr]);
