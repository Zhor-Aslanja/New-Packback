// $(function(){
// 	alert();
// })
/////////////////////////
// $(()=>{
// 	alert();
// });
/////////////////////////
// $(()=>{
// 	$("p").on({
// 		mouseenter: function(){	
// 		$(this).css("background-color", "red");
// 		},
// 		mouseleave: function(){
// 		$(this).css("background-color", "green");
// 		},
// 		click: function(){
// 		$(this).css("background-color", "blue");
// 		},
// 	});
// });
/////////////////////////
// $(()=>{
// 	$("#hide").click(function(){
// 		$("p").hide();
// 	});
// 	$("#show").click(function(){
// 		$("p").show();
// 	});
// 	$("#toggle").click(function(){
// 		$("p").toggle();
// 	});

// });
/////////////////////////
$(()=>{
	$("#fadein").click(function(){
		$("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000);
	});
});
/////////////////////////
$(()=>{
	$("#fadeout").click(function(){
		$("#div1").fadeOut();
		$("#div2").fadeOut("slow");
		$("#div3").fadeOut(3000);
	});
});
/////////////////////////
$(()=>{
	$("#fadetoggle").click(function(){
		$("#div1").fadeToggle();
		$("#div2").fadeToggle("slow");
		$("#div3").fadeToggle(3000);
	});
});
/////////////////////////
$(()=>{
	$("#fadeto").click(function(){
		$("#div1").fadeTo("slow", 0.15);
		$("#div2").fadeTo("slow", 0.4);
		$("#div3").fadeTo("slow", 0.7);
	});
});
/////////////////////////
$(()=>{
	$("#flipdown").click(function(){
		$("#panel").slideDown(5000);
	});

	$("#flipup").click(function(){
		$("#panel").slideUp(5000);
	});
});
/////////////////////////
$(()=>{
	$("#flip").click(function(){
		$("#panel").slideToggle(5000);
	});
	

	$("#st").click(function(){
		$("#panel").stop();
	});
});

/////////////////////////
$(()=>{
	$("button").click(function(){
		$("div").animate({left: "250px"})
		$("div").animate({top: "250px"})
	});
});
/////////////////////////
