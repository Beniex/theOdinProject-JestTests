const { ciph, shiftIndex, isLetter, isUpperCase } = require('./caesarCipher');

test('takes string and return shifted string by the facor', ()=>
    {expect(ciph('abc', 2)).toBe('cde'); 
}); 

test('takes string and return shifted string by the factor wrapping from z to a ', ()=>
    {expect(ciph('xyz', 3)).toBe('abc'); 
});

test('takes string and doesnt change the non-letter char ', ()=>
    {expect(ciph('hdt,hd', 1)).toBe('ieu,ie'); 
});
/*
test('preserves case for single letter', () => {
    expect(ciph('A', 1)).toBe('B'); // Now correctly expects uppercase B
  });
  
test('preserves case for mixed case string', () => {
    expect(ciph('HeLLo', 3)).toBe('KhOOr'); // Now correctly expects uppercase FF and Va
  });
*/

test('shiftIndex ', ()=>
    {expect(shiftIndex('b', 2)).toBe('d'); 
});
test('isletter ', ()=>
    {expect(isLetter('b')).toBeTruthy(); 
});

test('isletter ', ()=>
    {expect(isLetter('/')).toBeFalsy(); 
});

test('isUpperCase', ()=>
    {expect(isUpperCase('B')).toBeTruthy(); 
});


