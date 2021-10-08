const palindromes = function (str) {
    var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');
    let rev_str = "";
    for( let i = str.length-1 ;i >= 0 ;i--)
    {
      rev_str+= str[i];
    }
     if(str === rev_str)
     return true;
     else
     return false;

};

// Do not edit below this line
module.exports = palindromes;
