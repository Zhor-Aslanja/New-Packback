// function myf(x){
// 	for(let i=0; i<x.length; i++){
// 		if (x[i] != x[x.length-1-i]){
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log([1,2,3,4,5,4,3,2,1]);
//////////////////////////////////////
// function myf(x){
// 	x = x.split("");
// 	for(let i=0; i<x.length; i++){
// 		if(x[i] == x[i].toUpperCase()){
// 			x[i] = x[i].toLowerCase();
// 		}else{
// 			x[i] = x[i].toUpperCase();
// 		}
// 	}
// 	return x = x.join("");
// }
// console.log("Hello My World");
//////////////////////////////////////
// function fact(x){
// 	if(x==0 || x==1){
// 		return 1
// 	}
// 	return x*fact(x-1);
// }
// console.log(fact(5))
//////////////////////////////////////
// function fact(x){
// 	return x==0 || x==1?1:x*fact(x-1);
// }
// console.log(fact(5));
//////////////////////////////////////
// function astichan(x,y){
// 	let p = y;
// 	for(let i=1; i<x; i++) {
// 		p*= y;
// 	}
// 	return p;
// }
// console.log(astichan(4,3));
//////////////////////////////////////
// function astichan(x,y){
	// if(y == 0){
	// 	return 1;
	// }
	// return x*astichan(x,y-1);
	/////////same//////////
// 	return y==0?1:x*astichan(x,y-1);
// }
// console.log(astichan(4,3));
//////////////////////////////////////
// function astichan(x,y){
// }
// console.time("astichan");
// astichan(4,3);
// console.timeEnd("astichan");
//////////////////////////////////////
function myf(a,b){
	if (a < b){
		if(a >= 10 && a <= 99){
			return a + myf(a + 1, b);
		} else{
			return myf(a + 1, b);
		}
	} else{
		return 0;
	}
}
console.log(myf(0,1000));
//////////////////////////////////////
