/* index.js */
$(document).ready(function(){
"use strict";

var resultJ = $("#resultJ");
resultJ.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
	resultJ.toggle(500);

if (toggleButton.text()== "Hide")toggleButton.text("Show");
 else toggleButton.text("Hide");

});

//changing nav bar with jQuery

var listItems = $("header nav li");
listItems.css("font-weight","bold");
listItems.filter(":first").css("font-size","18px");





$("#searchForm").on("submit",function(){
 
  var searchPhrase = $("#searchPhrase").val();
  var useStars = $("#useStars").val();
  var langChoice = $("#langChoice").val();

 if (searchPhrase) {
  
  resultJ.text("Searching...");

  var gitHubSearch = "https://api.github.com/search/repositories?q=" + searchPhrase;

  if(langChoice != "All") {
  	gitHubSearch += "+language:" + encodeURIComponent(langChoice);
  }
 
  if (useStars) {
  	gitHubSearch += "&sort=stars";
  }

console.log(gitHubSearch);
// var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:?&sort=stars";

$.get(gitHubSearch, function (r){
	//console.log(r.items.length);
	displayResults(r.items);
});
}


return false;
});












// var msg = "Hello JavaScript";
//     	<!-- alert(msg); -->
//     	console.log(msg);

//     	var resultsDiv = document.getElementById("results");
//     	resultsDiv.innerHTML = "<p> This is from JavaScript</p>";
// //Objects
// var object = {
// 	name: "jQuery",
// 	language: "Java",
// 	score: 4.0,
// 	logs: function(){

// 	},
// 	objectinobject: {

// 	}
// };

// object.phone = "123-456-7890";

// console.log(object.name);
// console.log(object.phone);


 // Arrays
//  var array = [{
//  	name: "jQuery",
//  	language: "Java",
//  	score: 4.0,
//  	logs: function(){
//  	},
//  	objectinobject: {

//  	}
//  },{
//  	name: "jQuery1",
//  	language: "Java1",
//  	score: 3.0,
//  	logs: function(){
//  	},
//  	objectinobject: {

//  	}
//  }
//  ];
// //  console.log(array.length);
// //  console.log(array[1].name);

// resultJ.empty();
// $.each(array, function( i ,item)
// {
//   var newResult ="<div class='result'>" + 
//   	"<div class='title'>" + item.name + "</div>" + 
//   	"<div>Language: " + item.language + "</div>" +
//   	"<div>score: " + item.score + "</div>" +
//   	 "</div>";
//   //  var newResult = item.name + item.language + item.score ;
// newResult.hover(function(){
// 	$(this).css("background-color","lightblue");
//  }, function(){
// 	$(this).css("background-color","transparent");
//  });

// resultJ.append(newResult);

// //(resultJ.text(newResult)).append(resultJ.text(newResult));
// console.log(newResult);
// console.log(resultJ);
// });

// var x,offer;
// for(x=0; x < array.length; x++){
// 	offer = array[x];
// 	if (offer.score > 4) continue;
// 	console.log(offer.name);
// } 

// var none;
// var a = 10;

// if (none = undefined) {
// 	console.log("none is undefinied");
// }

// if (a === 10) {
// 	console.log("a is 10");
// }

  
// function showMsg(msg)
// {
// 	console.log("Showing: " +msg);
// }

// showMsg("Result");


// /* to stop overloading we use only one function*/

// function showMsg(msg, calls)
// { 
// 	if(calls){
// 	console.log("Showing+: " +msg +calls);
// }
// else{
//  console.log("Showing+: " +msg);
//  }
// }

// showMsg("Result", "and more");

// var showIt = function (msg)
// {
// 	console.log(msg);
// }
// showIt("Some message");

// function showItThen(msg, callback)
// {
// 	showIt(msg);
// 	callback();
// }

// showItThen("showItThen called",function(){console.log("callback called");
// });


// var inGlobal = true;

// function testMe() {
// 	console.log("testMe(): " +inGlobal);

// 	var someMsg = "Some message";
//	console.log("testMe(): " +someMsg);

// showItThen("with closure", function() {
// 	showIt("testMe with Closure(); " +someMsg);
// });

// }

// testMe();

//Networking with jQuery
// var gitHubSearch = "https://api.github.com/search/repositories?q=topic:ruby+topic:rails";

// $.get(gitHubSearch, function (r){
// 	//console.log(r.items.length);
// 	displayResults(r.items);
// });

function displayResults(array){
 resultJ.empty();
 $.each(array, function( i ,items){
  var newResult = $("<div class='result'>" + 
  	"<div class='title'>" + items.name + "</div>" + 
  	"<div>Language: " + items.language + "</div>" +
  	"<div>score: " + items.score + "</div>" +
  	 "</div>");
    // var newResult = items.name + items.language + items.score;
 //    var newResult1 = items.name;
 //    var newResult2 = items.language;
 //    var newResult3 = items.score;
  newResult.hover(function(){
	$(this).css("background-color","lightblue");
 }, function(){
	$(this).css("background-color","transparent");
 });

  resultJ.append(newResult);
// console.log(newResult1);
// console.log(newResult2);
// console.log(newResult3);

// resultJ.text(newResult1);
// resultJ.text(newResult2);
// resultJ.text(newResult3);
// $resultJ.html(newResult + "<br/")
});
};

// var x,offer;
// for(x=0; x < array.length; x++){
// 	offer = array[x];
// 	if (offer.score > 4) continue;
// 	console.log(offer.name);
// } 










});
