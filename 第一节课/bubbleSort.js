const arr = require('./arr.js')
function bubbleSort(arr){
if(arr == null || arr.length <1) {
    return arr
}

for(let i = 0 ;i<arr.length-1;i++){
    let temp = []
    for(let j = 0 ;j<arr.length-1-i;j++){
     if(arr[j] > arr[j+1]){
         temp = arr[j]
         arr[j] = arr[j+1]
         arr[j+1] = temp 
     }
    }
  }
  return arr 
}

console.log(bubbleSort(arr));

