// let x = [1,5,8,6,3,7,8,9,4,2,3,6,10];
// x = x.sort(()=>{
// 	return a-b
// });
// console.log(x[x.length-2]);


// let x = [1,5,8,6,3,7,8,9,4,2,3,6,10];
// let y = [];
// for(let i = 0; i < x.length; i++){
// 	for(let j = i+1; j < x.length; j++){
// 		if(x[i] == x[j]){
// 			if(y.includes(x[i]) == false){
// 				y.push(x[i]);
// 			}
// 		}
// 	}
// }
// console.log(y)


// let x = [1,5,8,6,3,7,8,9,4,2,3,6,10];
// let min = Math.min(...x);
// let max = Math.max(...x);
// let imin = x.indexOf(min);
// let imax = x.indexOf(max);
// let change = x[imin];
// x[imin] = x[imax];
// x[imax] = change;
// console.log(x);


// let x = [1,5,8,6,3,7,8,9,4,2,3,6,10];
// let count = 0;
// for(let i = 0; i < x.length; i++){
// 	if((x[i] + i) % 2 == 0){
// 		count++;
// 	}:
// }:
// console.log(count);


// let x = [1,5,8,6,3,7,8,9,4,2,3,6,10];
// let min = x[0];
// for(let i = 0; i < x.length; i++){
// 	if(x[i] < min){
// 		min = x[i];
// 	};
// };
// console.log(x.indexOf(min));


// function myf(x){
// 	for(let i = 0; i < x.length; i++){
// 		if(x[i]>x[i+1]) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(myf())

// console.log(document.getElementsByTagName('.div1'));

let div = document.getElementsByClassName('div1');
// div[0].style.backgroundColor = "green"; 
// div[0].style.backgroundColor = "red"; 
for(let i = 0; i < div.length; i++){
	div[i].addEventListener("click", myf);
};
// function myf(){
// 	let r = Math.round(Math.random()*255);
// 	let g = Math.round(Math.random()*255);
// 	let b = Math.round(Math.random()*255);
// 	this.style.backgroundColor = "rgb("+r+","+g+","+b+")";
// };


let x =["Edmon", "Karen", "Ashot", "Armine", "Anush", "Karine", "Eva", "Armen"];
function myf(){
	let r = Math.round(Math.random()*255);
	let g = Math.round(Math.random()*255);
	let b = Math.round(Math.random()*255);
	let fs = Math.round(Math.random()*50);
	this.innerHTML = x[Math.floor(Math.random()*x.length)]
	this.style.backgroundColor = "rgb("+r+","+g+","+b+")";
	this.style.fontSize = fs+"px";
};