const {analyzeArray} = require('./analyzeArray'); 


test('return an object with average calculated ', ()=>{
    expect(analyzeArray([4,6]).average).toBe(5)
})

test('return an object with min calculated ', ()=>{
    expect(analyzeArray([4,7, 9, 6]).min).toBe(4)
})
test('return an object with max calculated ', ()=>{
    expect(analyzeArray([4,1, 3, 6]).max).toBe(6)
})
test('return an object with length calculated ', ()=>{
    expect(analyzeArray([4,6]).length).toBe(2)
})