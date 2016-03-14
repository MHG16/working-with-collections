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

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

// "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },

var costRange = items.filter(function priceRange(currentValue, index, array) {
	if ((currentValue.price >= 14.00) && (currentValue.price <= 18.00)) {
		return true;
	}
	else {
		return false;
	}
});

console.log('Items that cost between $14.00 and $18.00 USD: ');
console.log(costRange.map(function title(currentValue) {
	return currentValue.title;  
}));


// 3. Show me how find the item with a "GBP" currency code and print its name and price. 
// Please console.log the one you find.

var GBP = items.filter(function findGBP(currentValue, index, array) {
	if (currentValue.currency_code === 'GBP') {
		return true;
	}
	else {
		return false;
	}
});

GBP.forEach(function nameAndPrice(currentValue) {

	console.log('The name is: '+currentValue.title+' and the price is '+currentValue.price);			
	
});

//4. Show me how to find which items are made of wood. Please console.log the ones you find.
// if there is wood it is within the materials array located in each object.  
//first make an array of all the material arrays with forEach
//then check each material array for wood with filter

var materials = items.forEach(function getMaterials(currentValue) {
	var arr = [];
	arr.push(currentValue.materials)
	return arr;
 });

console.log(materials);





// //5. Show me how to find which items are made of eight or more materials. 
// //Please console.log the ones you find.







//6. Show me how to calculate how many items were made by their sellers 





