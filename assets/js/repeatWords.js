const repeatString = function(string, num) {
    let repeatedWord = ""
    for (let index = 0; index < num; index++) {
        repeatedWord = repeatedWord.concat(string)
    }
    return repeatedWord
}

console.log(repeatString('hey', 3))