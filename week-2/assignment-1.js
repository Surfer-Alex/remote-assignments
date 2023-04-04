function max(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++){
        if(numbers[i]> max){
            max = numbers[i];
        }
    }
    return max;// your code here
    }
    console.log(max([1, 2, 4, 5])); // expected output: 5
    console.log(max([5, 2, 7, 1, 6])); // expected output: 7