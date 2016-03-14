// 1. Show me how to calculate the average price of all items. Please console.log the average

function average(array){
    
    var sum = 0;
    var average = 0; 
  
    items.forEach(function add (currentValue, index, array) {
        sum = sum + currentValue.price; 
    }); 

    return (sum/array.length).toFixed(2); 
}

console.log(average(items));

Show me how to get an array of items that cost between $14.00 and $18.00 USD


