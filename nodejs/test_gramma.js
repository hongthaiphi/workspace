var str = "find:toyou";
if (str.startsWith("find:")){
	console.log('found');
}else{
	console.log('not found');
}

var str2 = "find:toyou";
if (str.localeCompare(str2)===0){
	console.log("equal");
}else{
	console.log('not equal');
}