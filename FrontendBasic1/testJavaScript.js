function testcondition(year,model,make){
	if(isNaN(year))
	console.log("Year --> Not a number"+ year);
	else if (year== undefined)
			console.log("Year --> is Undefined");

	else
	console.log("Year has value"+year);

}

testcondition("year");