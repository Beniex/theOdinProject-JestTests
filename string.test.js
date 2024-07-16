
const { capitalize, reverseString } = require('./string');

test('takes a string and returns it with first letter in capital',
     () => {
    expect(capitalize('skibidi')).toBe('Skibidi');
});

test('takes a string and returns it reversed', 
    () => {
    expect(reverseString('ert')).toBe('tre'); 

}); 


