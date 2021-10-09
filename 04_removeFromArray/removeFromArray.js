const removeFromArray = function(array, ...theArgs) {
       let newarr = [];
      array.forEach(element => {
        if (!theArgs.includes(element)) {
            newarr.push(element);
          }
       });
       return newarr ;

};

// Do not edit below this line
module.exports = removeFromArray;
