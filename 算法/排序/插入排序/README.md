###��������˼��
------
������ֳ������֣�ǰһ���������򣬺�һ����δ���򡣽���һ���ֵ���һ��������ǰ�벿�֣������������

```
function insertionSort(arr) {
  var len = arr.length,
      value,    //�洢��ǰҪ�Ƚϵ�ֵ
      i,        //i�洢��δ�ź���ĵ�ǰλ��
      j;        //j�洢���Ѿ��ź���ĵ�ǰλ��
  for(i=0; i<len; i++){
    value = arr[i];

    for(j=i-1; j>-1 && arr[j]>value; j-- ){
      arr[j+1] = arr[j]
    }
    arr[j+1] = value;
  }
}
```