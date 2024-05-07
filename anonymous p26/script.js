$(()=>{
///callback functions	

	// $(#hide).click(function(){
	// 	$(#text).hide(5000, function(){
	// 		alert("text has been removed");
	// 	});
	// 	$("#text").show(5000, function(){
	// 		alert("text has been set back");
	// 	});
	// });


///Chaining

	// $("#hide").click(function(){
	// 	$("#text")
	// 	.slideUp(2000)
	// 	.slideDown(2000);
	// });


	// $("#hide").click(function(){
	// 	$("#text").slideUp(2000).slideDown(2000);
	// });


///Get Content and Anttributes

	// $("#hide").click(function(){
		// alert("HTML: "+$("#text").html());
		// alert("HTML: "+text.innerHTML);
	// });


	// $("#hide").click(function(){
	// 	$("#text").html("Hello");
	// 	alert("HTML: "+ $("#text").html());
	// });


	// $("#hide").click(function(){
	// 	test.value += " Edmon"
	// 	alert(test.value);
	// });


	// $("#hide").click(function(){
	// 	$("#test").val($("#test").val()+" Edmon")
	// 	alert($("#test").val())
	// });


	// $("#hide").click(function(){
	// 	// alert($("a").attr("href"));
	// 	alert($("#test").attr("type"));
	// });

///
	// $("#hide").click(function(){
	// 	$("#hide").fadeToggle("slow");
	// 	$("#show").fadeToggle("slow");
	// 	$("#test").attr("type", "password")
	// });
	// $("#show").click(function(){
	// 	$("#hide").fadeToggle("slow");
	// 	$("#show").fadeToggle("slow");
	// 	$("#test").attr("type", "text");
	// });

///
	$("#hide").click(function(){
		$("#text").append("Hello<br>");
	});
	$("#prep").click(function(){
		$("#text").prepend("Hello<br>");
	});
///Set Content - text(), html(), and val(),


});

