let array = [];

for (let x = 1; x < 101; x++){
    if (x % 3 === 0 && x % 5 === 0) {
        array.push('fizz-buzz')
    } else if (x % 3 === 0) {
        array.push('fizz')
    } else if (x % 5 === 0) {
        array.push('buzz')
    } else {
        array.push(x)
    }
    
}

console.log(array);