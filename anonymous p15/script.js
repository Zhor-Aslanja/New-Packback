// let name = ["Edmon", "Ashot", "Karen", "Arsen", "Vahagn"];
// let div = document.getElementsByTagName('div')
// ///////// let div = document.querySelectorAll("div");
// /////////let div = document.querySelectorAll(".div1") //<div class="div1"></div>; 
// /////////let div = document.querySelectorAll("#div1") //<div id"div"></div>; 
// ///////// console.log(div);0
// btn1.addEventListener("click", ()=>{
// 	for(let i=0; i < div.length; i++){
// 		// console.log(div[i]);
// 		let r = Math.round(Math.random()*255);
// 		let g = Math.round(Math.random()*255);
// 		let b = Math.round(Math.random()*255);
// 		div[i].style.backgroundColor = "rgb("+r+","+b+","+b+")";
// 		let ft = Math.round(Math.random()*50)+"px";
// 		div[i].style.fontSize = ft;
// 		div[i].innerHTML = x[Math.floor)Math.random()*x.length];
// 	};
// });


// let text = "I love drinking Tea so much";
// console.log(text[0]);
// console.log(text[1]);


// let text = "Effect";
// text[0] = A;
// console.log(text);


// let text = "I/love/Tea";
// text = text.split("/");
// console.log(text);
// console.log(text[0]);
// text[1] = "drinking";
// console.log(text[1]);
// console.log(text[2]);
// console.log(text);


// let text = "I/love/tea";
// text = text.split("love");
// text[1] = "drinking";
// text = text.join(" ");
// console.log(text);


// let text = "Hello My World";
// console.log(text.startsWith("h"));
// console.log(text.startsWith("H"));
// console.log(text.endsWith("d"));
// console.log(text.endsWith("world"));


// let text = "Hello My World";
// console.log(text.includes("my"));


// let text = "Hello My World";
// console.log(text.indexOf("my"));


// let text = "Hello My World";
// console.log(text.lastIndexOf("i"));


// let text = "   Hello My World   ";
// console.log(text.trim()); //without space;
// console.log(text); //space;
// console.log(text.trimStart()) //start space;
// console.log(text.trimEnd()) //end space;


// let text = "Hello My World";
// console.log(text.substring(4,10));


btn1.addEventListener("click", ()=>{
	let x = inp1.value;
	// console.log(x, i, x[i]);
	x = x.split(" ");
	for(let i = 0; i<x.length; i++){
		x[i] = x[i].split("");
		x[i][0] = x[i][0].toUpperCase();
		x[i] = x[i].join("");
	}
	x = x.join(" ");
	h1.innerHTML = x;
});