const { add, substract, divide, multiply} = require('./calculator');


test('takes two numbers and returns the sum of them', 
    () => {
        expect(add(3, 4)).toBe(7); 
}); 

test('takes two numbers and returns the substraction of them', 
    ()=>{
        expect(substract(8, 6)).toBe(2); 
    }
); 

test('takes two numbers and returns the result of thier division', 
    ()=>{
        expect(divide(12, 4)).toBe(3); 
    }
); 

test('takes two numbers and return the multiplication of them', 
    ()=>{
        expect(multiply(12, 2)).toBe(24); 
    }
); 