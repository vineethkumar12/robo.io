const { without } = require('lodash');

var_= require('lodash');
 var array=[1,2,3,4,5]; 
 console.log('answer:', without(array,2));  
 
  var color2 = document.getElementById("color2");
  var color1 = document.getElementById("color1");
  var body = document.getElementById("gradient"); 
  color1.addEventListener("input",function(){
  body.style.background =" linear-gradient(to right,"+color1.value+","+color2.value+")";
  document.querySelector("h2").classList.add("coolTitle");
  })
  color2.addEventListener("input",function(){
  
  body.style.background =" linear-gradient(to right,"+color1.value+","+color2.value+")";
  
  })