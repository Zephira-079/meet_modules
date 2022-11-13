let mean = (() => {
    return function (...digits) {
        let summation = 0
        digits.forEach(digit => {
            summation += digit
        })

        return summation / digits.length
    }
})()
// mean(1,4,3,10,7,5,6)