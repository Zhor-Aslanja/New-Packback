// for(let i = 6; i > 0; i--){
// 	for(let j=i; j>0; j--){
// 		document.write("*")
// 	}
// 	document.write("<br>")
// }


// for(let i = 0; i<6; i++){
// 	for (let j=0; j<=i; j++){
// 		center.innerHTML += "*"
// 	}
// 	center.innerHTML += "<br>";
// 	// center.align = "center";
// 	// center.style.textAlign = "center";
// }


// for(let i = 0; i<5; i++){
// 	for(let j=0; j<=i; j++){
// 		document.write(i+1)
// 	}
// 	document.write("<br>")
// }


// for(let i = 0; i<5; i++){
// 	for(let j=0; j<5; j++){
// 		if(i>0 && i<4 && j>0 && j<4){
// 			document.write("&nbsp&nbsp");
// 		}else{
// 			document.write("*");
// 		};
// 	};
// 	document.write("<br>");
// };


// let animals = ["Panda", "Lion", "Bear", "Dog", "Cat"];
// animals.splice(3,0, "Snake", "Eagle");
// console.log(animals)


// let animals = ["Panda","Lion","Bear","Dog","Cat"];
// console.log(animals.indexOf("Bear"));


// let gin = [100,150,250,10,25,60,37,85,3];
///// let gumar = 0;
// let min = gin[0;]
// for(let i = 0; i < gin.length; i++){
///// gumar += gin[i];
// 	if(gin[i] < min){
// 		min = gin[i]
// 	}
// }
// console.log(min);
///// console.log(gumar+"$");


let x = [1,2,3,4,7,9,8,5];
let qanak = 0;
for(let i = 0; i < x.length; i++){
	if(x[i]%2==0){
		qanak++;
	}
}
console.log(qanak)