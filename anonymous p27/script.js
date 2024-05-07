$(()=>{
	//Add Element
	// $("body").append("<p style='background-color: red;'>Hello</p>") 
	// let txt1 = '<p style="background-color: red">Hello</p>';
	// let txt2 = $("<p></p>").text("Hello").css("background-color", "blue");
	// let txt3 = document.createElement("p");
	// txt3.innerHTML = 'Hello';
	// txt3.style.backgroundColor = "orange";
	// $("body").append(txt1, txt2, txt3);
	// $("body").prepend(txt1, txt2, txt3);
	// $("body").after(txt1, txt2, txt3);
	// $("body").before(txt1, txt2, txt3);


	//Remove Elements
	// let txt1 = '<p style="background-color: red">Hello</p>';
	// let txt2 = $("<p></p>").text("Hello").css("background-color", "blue");
	// let txt3 = document.createElement("p");
	// txt3.innerHTML = 'Hello';
	// txt3.style.backgroundColor = "orange";
	// $("body").remove();


	// $("div").click(function(){
	// 	$("p").empty();
	// })


	//Get and Set CSS Classes
	// $("div").click(function(){
	// 	$("p, div").toggleClass("background color");
	// });


	/// css() Method
	// $("#div1").css({
	// 	width: "100%",
	// 	height: "100%",
	// 	backgroundColor: "red",
	// });


	///Dimensions
	// console.log($("div").width(), $("div").innerWidth(), $("div").outerWidth(true), $("div").outerWidth())
	// console.log($("div").height(), $("div").innerHeight(), $("div").outerHeight(true), $("div").outerHeight())


	//Traversing Ancestors
	// console.log($("div").parent()[0])
	// console.log($('#last').parentsUntil("#htm"));


	//Children() Method
	// console.log($('#first').children());
	console.log($("#first").find("div"))

});