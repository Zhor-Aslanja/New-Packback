//1
// function myf(x){
// 	for(let i=0;i<x.length;i++){
// 		for(let j=i+1;j<x.length;j++){
// 			if(x[i]>x[j]){
// 				[x[i],x[j]]=[x[j],x[i]]
// 			}
// 		}
// 	}
// 	return x
// }
// console.log(myf([1,5,3,9,8,7,4,2]));

//2
// function myf(a,b){
// 	let gumar = 0;
// 	for(let i=a;i<=b;i++){
// 		if(i>=10 && i<=99){
// 			gumar+=i
// 		}
// 	}
// 	return gumar
// }
// console.log(myf(97,100));

//3
// function myf(a,b){
// 	return Math.round(Math.random()*(b-a)+a);
// }


// console.log(myf(10,20));

//4
// function myf(x){
// 	let qanak=0;
// 	for(let i=0;i<=x;i++){
// 		if(i%2==0){
// 			qanak++;
// 		}
// 	}
// 	return qanak
// }

// console.log(myf(100));

//7
// function myf(text){
// 	text = text.split("");
// 	for(let i=0; i<text.length; i++){
// 		if(text[i] == text[i].toUpperCase()){
// 			text[i] = text[i].toLowerCase();
// 		}else{
// 			text[i] = text[i].toUpperCase();
// 		}
// 	}
// 	text = text.join("");
// 	return text
// }

// console.log(myf("Hello My World"));

//9
// let x = ["Edmon","Armen","Ashot","Zhora","Armine","Anahit","Anush","Tamara","Hrach"];
// btn1.addEventListener("mousemove", myf)
// function myf(){
// 	let div = document.getElementsByTagName('div');
// 	for(let e of div){
// 		e.innerHTML = x[Math.floor(Math.random()*x.length)];
// 	}
// }

//10
// let div = document.getElementsByTagName('div');
// for(let e of div){
// 	e.addEventListener("click", ()=>{
// 		let r = Math.round(Math.random()*255);
// 		let g = Math.round(Math.random()*255);
// 		let b = Math.round(Math.random()*255);
// 		e.style.backgroundColor = "rgb("+r+","+g+","+b+")";
// 	});
// }


//11
// let x = [1,3,6,8,9,2,11,2,3,10];
// x = x.sort((a,b)=>{
// 	return b-a
// });
// console.log(x[1]);

