const arr = [2,4,1,5,3] 
// 构成一个 大根堆 

// heapify  一个数在一个位置 看看 是不是还能往下

//heapinsert   一个数 在一个位置 index  看能不能 往上 

function heapInsert(arr,index){
    while(arr[index] > arr[ Math.floor((index-1) /2 ) ] ) {
      swap(arr , index ,((index-1) /2 ) )
      index = (index-1)/2
    }
}

function heapify(arr,index,heapSize){
    var left = 2 * index + 1
    while(left < heapSize) {
        var largest = left + 1 < heapSize  && arr[left + 1] > arr[left] ? left + 1 : left 
        // 父亲 和 孩子 谁大 
        var largest = arr[largest] > arr[index] ?  largest : index 
        if(largest == index) {
            break
        }
        // 交换 
        swap(arr,largest,index)
        index = largest 
        left = 2 * index + 1 
    }


}

 

//   两个位置的数 做交换  

function swap (arr,num1,num2){
  var temp = []  
  temp = arr[num1]
  arr[num1] = arr[num2]
  arr[num2] = temp 
}




//  堆排序    构建 一个大根堆 把第一个值 和 最后一个值交换 heapSize -1  在重新构建 直到 heapSize = 0 


function heapSort(arr){
  if(arr == null || arr.length <2 ){
      return 
  }
  // 构建出来一个大根堆 
  for(let i = 0; i < arr.length;i++){
     heapInsert(arr,i)
  }
  
  let heapSize = arr.length 

  // 先 第一个值 与 最后一个值交互 

  swap(arr , 0 , --heapSize) 

  // 重新构建堆  

  while(heapSize > 0){
      heapify(arr,0,heapSize)
    swap(arr , 0 , --heapSize) 
    
  }

}


