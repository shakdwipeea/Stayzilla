var fs = require('fs');

var file = fs.readFileSync('hackathon_chat_data.csv');

var contents = file.toString();

var array = contents.split(',');

var indicesCity = [];

var indicesHotels = [];

for (var i = 0; i < array.length; i++) {
	//console.log("I",i);
	if (i % 3 === 1) {
		console.log("array[i]",array[i]);
	};
	
};
//console.log(array);

//console.log("\n");
/*var j = 0;
for (var i = 0; i < array.length; i++) {
	if (array[i] === '-') {
		j = i;	
		console.log("j",j);
		while(array[j] !== '<br' && j < 0) {
			j--;
			console.log('Array[j]',j);
		}
		j++;
		while(j !== i) {
			indicesHotels.push();
			j++;
			console.log("I",i);
			console.log("J",j);
		}

		var str = array[i+1];
		if (str !== '<b>Stayzilla') {
			indicesCity.push(str);
		}
		
	};
};

console.log(indices);
console.log(indicesHotels);*/