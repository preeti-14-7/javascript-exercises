const ftoc = function(temp) {
    let newTemp ;
    newTemp = (5*(temp -32))/9 ;

    return parseFloat(newTemp.toFixed(1));
};

const ctof = function(temp) {
     let newTemp;
     newTemp = (9*temp) /5 + 32;
     return parseFloat(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
