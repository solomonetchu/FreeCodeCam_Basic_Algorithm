function largeNumberArray(arr){
    let result = [];
    for(let i =0; i < arr.length; i++){
        let largest = arr[i][0];
        for(let j =0; j < arr.length; j++){
            if(arr[i][j] > largest)
            largest = arr[i][j];
        }
        result[i] = largest;
    }
    return result;


}