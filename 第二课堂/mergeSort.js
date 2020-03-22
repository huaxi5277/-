const arr = require('../第二课堂/arr')
mergeSort(arr)
function mergeSort(arr){
 if(arr == null || arr.length <2){
     return 
 }

 process(arr, 0 ,arr.length-1)
}

function process(arr,l,r){
    if(l == r){
        return 0
    }
    let mid = Math.floor((l+r)/2)
    process(arr,l,mid)
    process(arr,mid+1,r)
    merge(arr,l,mid,r)

}

function merge(arr,l,mid,r){
    let help = []
    let p2 = mid+1
    let p1 = l
    let index = 0
    while(p1<=mid && p2 <=r){
    help[index++] = arr[p1] <=arr[p2] ?  arr[p1++] : arr[p2++]
    }
    while(p1<=mid){
        help[index++] = arr[p1++]
    }
    while(p2<=r){
        help[index++] = arr[p2++]
    }

    for(let i = 0;i<help.length;i++){
        arr[l+i] = help[i]  
    }

}


console.log(arr)