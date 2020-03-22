// 非基于比较的排序 
const arr = require('./arr')
radixSort(arr)
console.log(arr)
function radixSort(arr){
if(arr == null || arr.length < 2 ){
return 
}

radix(arr,0,arr.length-1,maxbits(arr))

}

function radix(arr,L,R,digit){
// 准备一个bucket
let bucket = new Array(R-L+1)
let r = 10
// 进桶次数 
console.log(bucket);
console.log(digit)
var i , j ;

for(let d = 1;d<=digit;d++){
    var temp = new Array(r).fill(0)

   for(let i = L;i<=R;i++){
       j = getDigit(arr[i],d)
       temp[j]++
   }
   for(i = 1;i<r;i++){
    temp[i] = temp[i] + temp[i-1]
   }
   // 进桶 

   for( i = R;i>=L;i--){
    j = getDigit(arr[i],d)
    bucket[temp[j] -1 ] = arr[i] 
    temp[j]--
   }
   
   for(i = L,j = 0;i<=R;i++,j++){
      arr[i] = bucket[j]
   }
}

}

// 在 给定的数中 找出最大值  看最大值几位 

function maxbits(arr){
var max = 0;
for(var i = 0;i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
var res = 0
while(max !=0){
res++
max = Math.floor(max / 10)
}
return res 
}

function  getDigit(x,d){
return  Math.floor((x / Math.pow(10,d-1) % 10))
}

// arr = [4,5,6,7,6]
// 首先 找出数组中 出现的最大值 看看 是 几位数   几位数 代表 接下来 进桶 出桶 的次数 

// 定义一个数组 长度为10  数组中 个位出现一次 就在 那个位置上+1 例如 33 23  temp = [0,0,0,0,1,1,2,1]


//  数组中 的 每一个位置 等于 前面的数的累加 temp = [0,0,0,0,1,2,4,5] 

// bucket 数组中 从数组的最后一位开始 依次向前 进入bucket    进入  bucket 的位置 与 temp 数组 中 的值相关 
// bucket 的长度 是 5  

// 6  入   bucket 数组中 第4位  [0,0,0,6,0]    temp -- temp = [0,0,0,0,1,1,1,1]
// 7 入 bucket 数组中   第5位   [0,0,0,0,7]    temp -- temp = [0,0,0,0,1,1,1,0]
// 依次 进入 bucket 

