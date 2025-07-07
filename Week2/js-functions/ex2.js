function isEven(num) {
    return num % 2 == 0;
}

function checkOddNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!isEven(arr[i])) {
            console.log(arr[i]);
        }
    }
}

arr = [1,2,3,4,5];
checkOddNumbers(arr);