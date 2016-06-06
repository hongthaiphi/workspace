var weather = require('weather-js');
 
// Options: 
// search:     location name or zipcode 
// degreeType: F or C 
 
weather.find({search: 'Hanoi', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
 
  // console.log(JSON.stringify(result, null, 2));
  console.log("temperature:" + result[0].current.temperature);
  console.log("" + result[0].current.skytext);
  console.log("feelslike:" + result[0].current.feelslike);
  console.log("humidity:" + result[0].current.humidity);
  console.log("winddisplay:" + result[0].current.winddisplay);
});