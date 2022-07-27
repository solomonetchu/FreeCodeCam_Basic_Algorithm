function LargestString(str){
    let words = str.split(' ');
    let maxLength = 0;
    for(i = 0; i < words.length; i++){
        if(words.length > maxLength){
            maxLength = words.length;
        }
    }
    return maxLength;


}
console.log(LargestString(10));