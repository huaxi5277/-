const arr = require('./arr')

function insertSort(arr){
    if(arr == null || arr.length < 2){
        return 
    }
    // 0 ~ 0 有序 
    // 0 ~ 1 有序 
    // 0 ~ N-1 有序 

    for(let i = 1;i<arr.length-1;i++){
        let temp = []
        for(let j = i-1; j>0&&arr[j]>arr[j+1];j--){
          temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
    }
    return arr
}

console.log(insertSort(arr))