// let table = document.createElement("table");
// for(let i=0; i<4; i++){
// 	let tr = document.createElement("tr");

// 	if(i===0){
// 		let td = document.createElement("td");
// 		td.colSpan = "4";
// 		td.innerHTML = "TITLE";
// 		tr.append(td);
// 	} else if(i===1){
// 		for(let j=0;j<2; j++){
// 			let td = document.createElement("td");
// 			td.colSpan = "2";
// 			td.innerHTML = "subtitle";
// 			tr.append(td);
// 			}
// 		} else if(i===2){
// 			for(let j=0; j<4; j++){
// 				let td = document.createElement("td");
// 				let ul = document.createElement("ul");
// 				for(let y=0; y<4; y++){
// 					let li = document.createElement("li");
// 					if(j % 2 === 0){
// 						li.innerHTML = "1 item";
// 					}else {
// 						li.innerHTML = "123";
// 					};
// 					ul.append(li);
// 				};
// 				td.append(ul);
// 				tr.append(td);
// 		}
// 	}
// 	else{
// 			for(let j=0; j<2; j++){
// 				let td = document.createElement("td");
// 				td.colSpan = "2";
// 				td.innerHTML = "sub subtitle";
// 				tr.append(td);
// 			}
// 		}
// 		table.append(tr);
	
// }
// table.border = "2";
// document.body.append(table);
/////////////////////////////////////
// div1.append(div2);
// div1.prepend(div2);
////////////////////////////////////
let w = 1;
let h = 1;
let k = true;
document.body.addEventListener("mousemove",(e)=>{
	let div = document.createElement("div");
	div.style.position = "absolute";
		if(w>=0 && k == true){
		w++;	
		h++;
		if(w == 100){
			k = false;
		}
	}else {
		w--;
		h--;
		if(w == 0){
			k = true;
		}
	}
	div.style.width = w+"px";
	div.style.height = h+"px";
	div.style.border = "1px solid #fff";
	div.style.borderRadius = "100%";
	div.style.top = e.clientY+"px";
	div.style.left = e.clientX+"px";
	let r = Math.round(Math.random()*255);
	let g = Math.round(Math.random()*255);
	let b = Math.round(Math.random()*255);
	div.style.backgroundColor = "rgb("+r+","+g+","+b+")"
	// console.log(e)	
	document.body.append(div);
});