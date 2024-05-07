// let tiv=0;
// setInterval(()=>{
// 	div1.innerHTML=tiv;
// 	tiv++;
// 	alert("Hello"); 
// }, 1000)


// let tiv=0;
// setInterval(()=>{
// 	div1.innerHTML=tiv;
// 	tiv++;
// 	if(tiv>=100){
// 		div1.innerHTML+="100<"
// 	} 
// }, 1)


// let x=setInterval(()=>{
// 	div1.innerHTML=tiv;
// 	tiv++;
// 	if(tiv==){
// 		clearInterval(x)
// 	}
// },100)


// for(let i=0;i<20;i++){
// 	let div=document.createElement("div");
// 	div.classList.add("s_div");
// 	main.append(div);
// }

// let div=document.querySelectorAll(".s_div");
// let x=setInterval(()=>{
// 	for(let i=0;i<div.length;i++){
// 		let top=Math.round(Math.random()*85)+"%";
// 		let left=Math.round(Math.random()*85)+"%";
// 		let r=Math.round(Math.random()*255);
// 		let g=Math.round(Math.random()*255);
// 		let b=Math.round(Math.random()*255);
// 		let rad=Math.round(Math.random()*50)+"%";
// 		div[i].style.top=top;
// 		div[i].style.left=left;
// 		div[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
// 		div[i].style.borderRadius=rad;
// 	}
// },1000);

let tp=0;
let lt=0;
let x=setInterval(()=>{
	lt++;
	div1.style.left=lt+"%";
	if(lt==90){
		clearInterval(x);
		let y=setInterval(()=>{
			tp++;
			div1.style.top=tp+"%";
			if(lt==90 && tp==90){
				clearInterval(y);
				let z=setInterval(()=>{
					lt--;
					div1.style.left=lt+"%";
					if(lt==0){
						clearInterval(z);
						let c=setInterval(()=>{
							tp--;
							div1.style.top=tp+"%";
							if(lt==0 && tp==0){
								clearInterval(c)
							}
						},10)
					}
				},10)
			}
		},10)
	}
}, 10);