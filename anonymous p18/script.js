 // btn1.addEventListener("click", myf);
 // function myf(){
 // 	alert("hello");
 // };
////////////////////////////////////////
// btn1.addEventListener("click", function(){
// 	alert("Hello");
// });
////////////////////////////////////////
// let myf = function(){
// 	alert("hello");
// }
// btn1.addEventListener("click", myf);
////////////////////////////////////////
// btn1.addEventListener("click", myf);
// var myf = function(){
// 	alert("Hello");
// }
////////////////////////////////////////
// let x = [1,5,8,9,6,3];
// x = x.map(function(element){
// 	return element*element;
// });
// console.log(x);
////////////////////////////////////////
// let x = [1,5,8,9,6,3];
// x = x.filter(function(element){
// 	if(element % 2 == 0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// });
// console.log(x);
////////////////////////////////////////
// let x = [1,5,8,9,6,3];
// x = x.map((a)=>{
// 	return a*a
// });
// console.log(x);
////////////////////////////////////////
// function(x){
// 	console.log(x);
// }(8);
////////////////////////////////////////
// (function(x){
// 	console.log(x);
// })(["Hello",8,7,6,5,"Barev"]);
////////////////////////////////////////
// function myf(x){
// 	alert(x);
// }
// myf(8434132);
////////////////////////////////////////
// (function(x){
// 	for(let i=0; i<x.length; i++){
// 		for(let j=i+1; j<x.length; j++){
// 			if(x[i] > x[j]){
// 				let change = x[i];
// 				x[i] = x[j];
// 				x[j] = change;
// 			};
// 		};
// 	};
// 	return console.log(x);
// })([1,8,6,6,5,2,4,9,3,1,7,11,22,333,5,7,4]);
////////////////////////////////////////
// let table = document.createElement("table");
// for(let i = 0; i < 4; i++){
// 	let tr = document.createElement("tr");
// 	for(let j=0; j<6; j++){
// 		let td = document.createElement("td");
// 		td.innerHTML = Math.round(Math.random()*100);
// 		tr.append(td);
// 	}
// 	table.append(tr);
// }
// table.border="1";
// table.style="width:100%; height:100vh; background-color:red";
// table.align="center";
// document.body.append(table);
////////////////////////////////////////
let table = document.createElement("table");
for(let i = 0; i<23; i++){
	let tr = document.createElement("tr");
	for(let j=0; j<13; j++){
		let td = document.createElement("td");
		td.innerHTML = Math.round(Math.random()*89999+10000);
		tr.append(td);
	}
	table.append(tr);
}
table.style="width:100%; height:100vh;"
table.align="center";
document.body.append(table);
////////////////////////////////////////
