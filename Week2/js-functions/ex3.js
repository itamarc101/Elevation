function checkExists(arr, num){
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return true;
    }
    return false;
}

console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));