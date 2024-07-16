const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function ciph (string, factor){
    //return string.split("").map(char => shiftIndex(char, factor)).join(""); 
    let result =""; 
    for(let char of string.split("")){
    if(!isLetter(char)){
        result += char; 
    } else {
        if(isUpperCase(char)){
            result += shiftIndex(char.toLowerCase(), factor).toUpperCase(); 
        } else {
            result += shiftIndex(char, factor); 
        }
    }
  }
return result; 
}

  function findIndex(char){
    for(let i=0; i<alphabet.length; i++){
        if(char === alphabet[i]){
            return i; 
        }
    }
  }
   function shiftIndex(char, factor){
        let newIndex = (findIndex(char) + factor)%26; 
        return alphabet[newIndex]; 
   }

   function isLetter(char){
    return alphabet.includes(char); 
   }

   function isUpperCase(char) {
    return /^[A-Z]$/.test(char);
  }
  
  module.exports = { ciph, shiftIndex, isLetter, isUpperCase };