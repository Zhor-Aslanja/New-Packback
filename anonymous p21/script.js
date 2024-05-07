// function myf(){
// let r = 10;
// let y = 4;
// let g = 10;
// let k = true;
// 	let x = setInterval(()=>{
// 		if(r > 0){
// 			r--;
// 			red.style.backgroundColor = "#ff0000";
// 		}else{
// 			red.style.backgroundColor = "#6f0000";
// 			if(y > 0){
// 				y--;
// 				yellow.style.backgroundColor = "#ffff00";
// 			}else{
// 				yellow.style.backgroundColor = "#606000";
// 				if(g > 0){
// 					g--;
// 					green.style.backgroundColor = "#00ff00";
// 				}else{
// 					if(k == false){
// 						clearInterval(x);
// 						return myf();
// 					}
// 					green.style.backgroundColor = "#005800";
// 					y = 4;
// 					k = false;
// 				}
// 			}
// 		}
// 	}, 100);
// }

// myf();
//////////////////////////////////////////////////////////////////

let x = setInterval(()=>{
	let date = new Date;
	hour.innerHTML = date.getHours();
	minute.innerHTML = date.getMinutes();
	second.innerHTML = date.getSeconds();
	calendar.innerHTML = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
	// console.log(date)
}, 1);