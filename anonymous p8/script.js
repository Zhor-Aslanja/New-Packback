//12
// let x=[1,6,8,5,2,3,4,75,2,2,1];
// let qanak =0;
// for(let i=0; i<x.length; i++){
// 	if(i%2==0){
// 		qanak++;
// 	}
// }
// document.write(qanak);

//8
// btm1.addEventListener("click," ()=>{
// 	let x = inp1.value;
// 	x = x.split(" ");
// 	for(let i=0; i<.x.length;i++){
// 		x[i] = x[i].split("");
// 		x[i][0] = x[i][0].toUpperCase();
// 		x[i] = x[i].join("");
// 	}
// 	x = x.join(" ");
// 	inp1.value = x;
// });


//13
// let x=[1,6,8,5,2,3,4,75,2,2,1];
// let y=[];
// for(let i = 0; i<x.length; i++){
// 	for(let j=i+1; j<x.length; j++){
// 		if(x[i] == x[j]) {
// 			if(!y.includes(x[i])){
// 				y.push(x[i])
// 			}
// 		}
// 	}
// };
// console.log(y);


//14
// let x=[1,6,8,5,2,3,4,75,2,2,1];
// let max = x.indexof(Math.max(...x));
// let min = x.indexof(Math.min(...x));
// console.log(min.max)
// let change = x[max];
// x[max] = x[min];
// x[min] = change;
// console.log(x);


//15
// let x=[1,6,8,5,2,3,4,75,2,2,1];
// for(let i = 0; i<x.length; i++){
// 	if((x[i]+i)%2==0){
// 		console.log(x[i])
// 	}
// };


//16
// function myf(x){
// 	for(let i=0; i<x.length; i++){
// 		if(x[i]>x[i+1]){
// 			return false
// 		}
// 	}
// 	return true
// }

// console.log(myf([1,6,8,10,12,13]));

//17
// for(let i = 0; i<5; i++){
// 	for(let j=0; j<=i; j++){
// 		document.write("*");
// 	}
// 	document.write("<br>")
// }

//18
// for(let i = 5; i>=0; i--){
// 	for(let j=i; j>=0; j--){
// 		document.write("*");
// 	}
// 	document.write("<br>")
// }

//19
// for(let i=0;i<5;i++){
// 	for(let j=0;j<5;j++){
// 		if(i>0 && i<4 && j>0 && j<4){
// 			document.write("&nbsp&nbsp");
// 		}else{
// 			document.write("*");
// 		}
// 	}
// 	document.write("<br>");
// }

//20
for(let i=0;i<5;i++){
	for(let j=0;j<=i;j++){
		p1.innerHTML+="*"
	}
	p1.innerHTML+="<br>"
}