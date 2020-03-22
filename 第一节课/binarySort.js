const arr = require('./arr')
const arr1 = [3,4,8,2,1]
function binarySort(arr){
    if(arr == null || arr.length < 2){
        return 
    }
    let data  = [] 
    for(var i = 0;i<arr.length;i++){
        var min = 0
        var end = i -1;
        var start = 0;
        var temp = arr[i]
        while(start<=end){
            min = Math.floor((start + end) / 2)
            if(arr[min] > temp){
                end = min -1 
            }
            else {
                start = min +1 
            }
        }
        for(var j = i-1;j>end;j--){
            data[j+1] = data[j]
            console.log(data)
        }
        data[end+1] = temp
        console.log(data)
    }
}


console.log(binarySort(arr));
