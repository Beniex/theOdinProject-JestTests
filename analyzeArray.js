function analyzeArray(array){
    return {average: average(array), 
        min:min(array), 
        max:max(array), 
        length:array.length
    }
}

function average(array){
    const sum = array.reduce(function (result, item) {
        return result + item;
      }, 0);
      return sum/ (array.length); 
}

function min(array) {
    if (array.length === 0) {
      return undefined;
    }
  let initialMin = array[0]; 
    const minValue = array.reduce((min, current) => (min < current ? min : current), initialMin);   
    return minValue;
  }


  function max(array) {
    if (array.length === 0) {
        return undefined;
      }
    let initialMax = array[0]; 
      const maxValue = array.reduce((max, current) => (max > current ? max : current), initialMax);   
      return maxValue;
  }
module.exports={analyzeArray}; 