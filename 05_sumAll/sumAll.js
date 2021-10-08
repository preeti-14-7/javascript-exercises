const sumAll = function(number1, number2) {
    
    if(number2 <0 || number1<0)
     return 'ERROR';
    if(typeof(number1) == typeof(number2))
    {
         
        let sum=0 ;
        if(number1 > number2)
        {
            for(let i = number2 ; i<=number1 ; i++)
            {
                sum = sum + i;
            }
            return sum ;
        }

        for(let i = number1 ; i<=number2 ; i++)
        {
            sum = sum + i;
        }
        
        return sum ;
    }
    else
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
