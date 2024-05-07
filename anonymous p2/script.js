let k=true;
for(let i=0;i<20;i++){
	let div=document.createElement("div");
	let tp=Math.round(Math.random()*400)+"px"
	let lt=Math.round(Math.random()*90)+"%"
	div.classList.add("ball");
	let r=Math.round(Math.random()*255);
	let g=Math.round(Math.random()*255);
	let b=Math.round(Math.random()*255);
	div.style.backgroundColor="rgb("+r+","+g+","+b+")";
	div.style.top=tp;
	div.style.left=lt;
	div.addEventListener("click",myf);
	document.body.append(div);
}

let count=0;

function myf(){
	// console.log(this)
	count++;
	score.innerHTML=count;
	this.remove();
	if(count==20){
		alert("WE HAVE WINNER");
		location.reload();
	 }
	 console("hello")
  }


let x=setInterval(()=>{
	let div=document.querySelectorAll(".ball");
	for(let i=0;i<div.length;i++){
		let tp=Number(div[i].style.top.split("px")[0]);
		div[i].style.top=(tp+10)+"px";
		if(tp>=645){
			k=false;
			clearInterval(x);
		}
		if(k==false){
			div[i].removeEventListener("click",myf)
		}
	}
},100);