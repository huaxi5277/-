const arr = require('./arr')
quickSort(arr)
console.log(arr);

function quickSort(arr){
   if(arr == null || arr.length <2) {
       return 
   } 

   // 掉排序 
   quick(arr,0,arr.length-1)
}



function quick(arr,L,R){
if(L<R){
   // 在数组中随机找一个数 与 数组最后一个数交换
   var random = L +  Math.floor(Math.random() * (R-L+1))
   swap(arr,random,R)
// 调 partition 
   var temp = partition(arr,L,R)
  quick(arr,L,temp[0]-1)
  quick(arr,temp[1]+1,R)
}


}





//   两个位置的数 做交换  

function swap (arr,num1,num2){
    var temp = []  
    temp = arr[num1]
    arr[num1] = arr[num2]
    arr[num2] = temp 
}


function partition(arr,L,R){
var less = L-1;  // 左边界
var more = R;    // 右边界 
var  res = []   // 最后返回的数组
while(L<more){
    if(arr[L] < arr[R]){    // 小于p值  左边界 往左扩 
        swap(arr,++less,L++)
    }
    else if(arr[L] > arr[R]){
        swap(arr,--more,L)
    }
    else {
        L++
    }
}
swap(arr,more,R)
res.push(less+1)
res.push(more)
return res;
}



