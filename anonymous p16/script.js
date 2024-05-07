// function tool(){
// 	alert("hello");
// }
// tool();
/////////////////////////////
// let tool = {
// 	kanch: function(){
// 		return alert("Hello")
// 	}
// }
// tool.kanch();
////////////////////////////
//2
// div1.onclick = myf;
// function myf(){
// 	alert(this)
// };
////////////////////////////
//3
// function myf(){
// 	alert(this)
// }
////////////////////////////
//4
// function myf(name){
// 	if(name == undefined) {
// 		console.log("barev bolorin")
// 	}else{
// 		console.log("barev " +name);
// 	};
// };
// myf("Zhora");
// myf("Edmon");
// myf();
///////////////////////////
//5
// function myf(name = "bolorin") {
// 	console.log("barev " + name);
// };
// myf("Edmon");
///////////////////////////
//6
// function qarakusi(x){
// 	console.log(x*x)
// }
// qarakusi(7); 
//////////////////////////
//7
// function qarakusi(x){
// 	return x*x;
// }
// console.log(qarakusi(7));
/////////////////////////
//8
// function qarakusi (x){
// 	return x*x
// }
// let gumar = qarakusi(7) + qarakusi(3);
// console.log(gumar)
////////////////////////
//9
// function qarakusi (x){
// 	return x*x
// }
// let gumar = qarakusi(qarakusi(5)) + qarakusi(4);
// console.log(gumar);
///////////////////////
//10
// function zuyg(x){
// 	if(x % 2 ==0){
// 		return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
// console.log(zuyg(2));
//////////////////////
//11
// function zuyg(x){
// 	if(x%2==0 && x != 0){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}
// }
// console.log(zuyg(2));
/////////////////////
//12
// function zuyg(x){
// 	if(x%2==0 && x != 0){
// 		return true;
// 	}
// 	return false;
// }
// console.log(zuyg(2));
/////////////////////
//13
function maximum(x){
	let max = x[0];
	for(let i=0; i<x.length; i++){
		if (x[i] > max){
			max = x[i];
		};
	};
	return max;
};

console.log(maximum([1,6,9,8,7,4,5,6,3,47,7]));
/////////////////////