const arr = require('./arr')
const arr1 = [4,9,8]
function selectSort(arr){
    if(arr == null || arr.length < 2) {
        return 
    }
   
    // 选择 一个最小的排在前面 
    // 第一 for  假设当前最小 
    // 第二for   自此以后 每个值 都跟 当前最小比较 找出最小
    for(let i = 0 ;i<arr.length-1;i++){
        var minIndex = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        var temp = []
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}

console.log(selectSort(arr))