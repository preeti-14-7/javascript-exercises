const getTheTitles = function(books) {
    let n = books.length ;
    let arr = [];
    for(let i=0; i<n ; i++)
    {
        arr[i]  = (books[i].title);
    }
    return arr;
    
};

// Do not edit below this line
module.exports = getTheTitles;
