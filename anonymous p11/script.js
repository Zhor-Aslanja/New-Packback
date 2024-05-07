// document.body.addEventListener("mousemove", (tag)=>{
// 	if(tag.clientX>=750 && tag.clientX<=850 && tag.clientY>=0 && tag.clientY<=100){
// 		div1.style.backgroundColor = "black";
// 		document.body.style.backgroundColor = "blue";
// 	}else{
// 		div1.style.backgroundColor = "blue";
// 		document.body.style.backgroundColor = "black";
// 	}
// });

// if(5=="5") {
// 	console.log(true)
// }else{
// 	console.log(false)
// }


// if(5==="5") {
// 	console.log(true)
// }else if(5==="5"){
// 	console.log(false)
// }else{
// 	console.log("something is wrong")
// }


btn1.addEventListener("click", ()=>{
	let a = Number(inp1.value);
	let b = Number(inp2.value);
	// let c = Number(inp3.value);
	let max;
	if(a>b){
		max = a;
	}else{
		max = b;
	}
	if(c>max){
		max = c;
	}
	// if(max>=10 && max<=99) {
	// 	document.write("<h1>Maximum is "+max+", erknish e</h1>")
	// }else{
	// 	document.write("<h1>Erknish"+max+" che </h1>")
	// }
	////////////////////////////////////////////////////////////
	// if(a==0 || b==0 ++ c==0){
	// 	console.log("tveric meky zro e")
	// }else{
	// 	console.log("zro chka"); 
	// }
	////////////////////////////////////////////////////////////
	// if(a>b && a>c){
	// 	max = a;
	// }else if(b>a && b>c){
	// 	max = b;
	// }else{
	// 	max = c;
	// }
	////////////////////////////////////////////////////////////
	max = a>b?a:a>10?"erknishic barcr e":"cacr e"; 
	//the same things
	if(a>b) {
		max = a
	}else if(a>10){
		max = "erknishic barcr e"
	}else{
		max = "carc e"
	}
	console.log(max);
});