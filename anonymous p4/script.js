// let degs=-90;
// let degm=-90;
// let degh=-90;
// second.style="transform: rotate("+degs+"deg);";
// minute.style="transform: rotate("+degm+"deg);";
// h.style="transform: rotate("+degh+"deg);";
// let sec=setInterval(()=>{
// 	degs+=6;
// 	degm+=0.1;
// 	second.style="transform: rotate("+degs+"deg);";
// 	minute.style="transform: rotate("+degm+"deg);";
// },1000)
// let hour=setInterval(()=>{
// 	console.log(hour)
// 	degh+=0.1
// 	h.style="transform: rotate("+degh+"deg);";
// },12500)


///////////////////////////////////////////////////////////////////////////////
// let colors=["red","green","blue","yellow","pink","orange","purple","black"];
// for(let i=0;i<20;i++){
// 	let div=document.createElement("div");
// 	let tp=Math.round(Math.random()*85)+"%"
// 	let tp=Math.round(Math.random()*85)+"%"
// 	div.classList.add("balls");
// 	div.style.top=tp;
// 	div.style.left=lt;
// 	div.addEventListener("click",myf)
// 	div.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
// 	document.body.append(div);
// }

// let sc=0;
// let tm=30;
// function myf(){
// 	if(this.style.backgroundColor!="black"){
// 		sc++;
// 		score.innerHTML=sc;
// 		this.remove();
// 		let div=document.createElement("div");
// 	let tp=Math.round(Math.random()*85)+"%"
// 	let tp=Math.round(Math.random()*85)+"%"
// 	div.classList.add("balls");
// 	div.style.top=tp;
// 	div.style.left=lt;
// 	div.addEventListener("click",myf)
// 	div.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
// 	document.body.append(div);
// 	tm+=3;
// 	timer.innerHTML=tm;
// 	}else{
// 		this.remove();
// 		let div=document.getElementsByClassName('balls');
// 		for(let i of div){
// 			i.removeEventListener("click",myf);
// 		}
// 	}
// }


// let time=setInterval(()=>{
// 	tm--;
// 	timer.innerHTML=tm;
// 	if(tm<=0){
// 		clearInterval(time);
// 		alert("GAME OVER")
// 	}
// 	if(score==20){
// 		let speed=setInterval(()=>{
// 			tm--;
// 	        timer.innerHTML=tm;
// 		},900);
// 	}
// },1000);
/////////////////////////////////////////////////////////////////


function myf(){
	if(inp1.value.length>=8){
		alert("your maximum character limited")
	}
	// document.body.style.backgroundColor="black"
}


