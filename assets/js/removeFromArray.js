const removeFromArray = function(array, ...inputValues){
    return array.filter(v => {
        return !inputValues.includes(v)
    })
}

console.log(removeFromArray([1,3,5,6], 1, 2, 3))