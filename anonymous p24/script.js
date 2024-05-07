// reg.addEventListener("click", ()=>{
// 	let user = {
// 		nm: nm.value,
// 		snm: surname.value,
// 	}
// 	localStorage.setItem("user", JSON.stringify(user));
// });
// let user = localStorage.getItem("user");
// user = JSON.parse(user);
// console.log(user);
/////////////////////////////////////////////////////////
$(document).ready(function(){
	// console.log(div1);
	// div1.innerHTML = "hello";
	// $("#div1").html("hello");
	// console.log(div1.innerHTML);
	// console.log($("#div1").html());
/////////////////////////////////////////////////////////
	// $(".div1").html("hello");
	// let x = document.getElementsByClassName("div1")
	// for(let i = 0; i<x.length; i++){
	// 	x[i].innerHTML = "Hello"
	// }
/////////////////////////////////////////////////////////
	// $("div").html("HellO");
/////////////////////////////////////////////////////////
	// $("div").dblclick(function(){
		// console.log(this)
		// $(this).hide("slow").show("fast");
		// $(this).hide("fast");
	// });
/////////////////////////////////////////////////////////
	// $("div").mouseenter(function(){
	// 	$(this).html("you have netered in div")
	// });
	// $("div").mouseleave(function(){
	// 	$(this).html("hello");
	// });
/////////////////////////////////////////////////////////
	// $("div").hover(
	// 	function(){
	// 		$(this).html("Enter");
	// 	},
	// 	function(){
	// 		$(this).html("Leave");
	// 	}
	// );
/////////////////////////////////////////////////////////
	// $("div").mousedown(function(){
	// 	$(this).html("asdasd")
	// });
/////////////////////////////////////////////////////////
	$("div").mouseup(function(){
		$(this).html("asdasd")
	});
});