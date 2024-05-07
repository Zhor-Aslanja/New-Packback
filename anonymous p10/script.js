// function myf(){
// 	alert("Hello")
// }

// document.body.addEventListener("keydown", myf);
// function myf(e){
// 	console.log(e)
// }

// document.body.addEventListener("keydown",(e)=>{
// 	if(e.key == "Enter"){
// 		alert("you have passed "+e.key)
// 	};
// });

// document.body.addEventListener("keyup",(e)=>{
// 	console.log(e)
// 	if(e.code == "KeyA"){
// 		alert("you have passed "+e.key)
// 	};
// });

// document.body.addEventListener("mousemove", (tag)=>{
	// document.body.style.backgroundColor = "red";
	// console.log(tag.target)
	// if(tag.clientX>=0 && tag.clientX<=100 && tag.clientY>=0 && tag.clientY<=100){
	// 	document.body.style.backgroundColor = "red";
	// }else{
	// 	document.body.style.backgroundColor = "black";
	// }
// });

// btn1.addEventListener("click", ()=>{
// 	// h1.innerHTML=Number(inp1.value)+Number(inp2.value);
// 	let x = Number(inp1.value);
// 	let y = +inp2.value;
// 	h1.innerHTML = x + y;
// });

btn1.addEventListener("click", ()=>{
	let x = Number(inp1.value);
	let y = +inp2.value;
	h1.innerHTML = x * y;
});+