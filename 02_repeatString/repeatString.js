const repeatString = function(string,number) {
    let finalString = '';
    if(number < 0)
    return 'ERROR';
    for(let i=1; i<=number;i++)
    {
        finalString = finalString + string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
