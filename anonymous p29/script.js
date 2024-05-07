let numbers = document.getElementsByClassName('numbers');
for(let i = 0; i < numbers.length; i++){
	 numbers[i].addEventListener("click", function(){
	 	resoult.innerHTML += this.innerHTML;
	 });
};


zero.addEventListener("click", function(){
	let regex = /\d+$/;
	regexMath = /[+\-/*]$/;
	if(regex.test(resoult.innerHTML)){
		resoult.innerHTML += this.innerHTML;
	}else if(regexMath.test(resoult.innerHTML) || resoult.innerHTML == ''){
		resoult.innerHTML += this.innerHTML + ".";
	};
});

let math = document.getElementsByClassName("math");
for(let i=0; i<math.length; i++){
	math[i].addEventListener("click" , function(){
		let regex = /\d+$/;
		let text = resoult.innerHTML;
		if(regex.test(resoult.innerHTML)){
			resoult.innerHTML += this.innerHTML;
		}
		if(text.endsWith("+") || text.endsWith("-") || text.endsWith("*") || text.endsWith("/")){
			resoult.innerHTML = resoult.innerHTML.slice(0,resoult.innerHTML.length-1);
			resoult.innerHTML += this.innerHTML;
		}
	});
};
clear.addEventListener("click", function(){
	resoult.innerHTML = " ";
});



dot.addEventListener("click", function(){
	let regex = /\d+$/;
	let text = resoult.innerHTML;
	if(regex.test(resoult.innerHTML) && resoult.innerHTML.endsWith('.') == false){
		resoult.innerHTML += ".";
	}else if(text.endsWith("+") || text.endsWith("-") || text.endsWith("*") || text.endsWith("/") || ""){
		resoult.innerHTML += zero.innerHTML+".";
	}
});



equal.addEventListener("click", function(){
	if(resoult.innerHTML.includes(procent.innerHTML)){
		let x = resoult.innerHTML.split("%");
		resoult.innerHTML = (x[0] * x[1]) / 100;
	}else{
		resoult.innerHTML = eval(resoult.innerHTML);
	}
});



procent.addEventListener("click", function(){
	let regex = /\d+$/;
	if(regex.test(resoult.innerHTML) && resoult.innerHTML.includes(this.innerHTML) == false){
		resoult.innerHTML += this.innerHTML;
	}
});



radic.addEventListener("click", function(){
	let regex = /\d+$/;
	let text = resoult.innerHTML;
	if(regex.test(resoult.innerHTML) && text.includes('+') == false && text.includes('-') == false && text.includes('*') == false && text.includes('/') == false && text.includes('%') == false){
		console.log(resoult.innerHTML)
		resoult.innerHTML = Math.sqrt(Number(resoult.innerHTML));
		console.log(resoult.innerHTML)
	}else{
		alert("Check Your Method, there can be Math Symbols")
	}
});



back.addEventListener("click", function(){
	resoult.innerHTML = resoult.innerHTML.slice(0,resoult.innerHTML.length-1);
});


	let k = true;
	resoult.addEventListener("click", function(){
	if(k == true){
		let input = document.createElement("input");
		input.value = this.innerHTML;
		this.innerHTML = '';
		input.addEventListener("blur", function(){
			resoult.innerHTML = this.value;
			input.remove()
			k = true;
		});
		input.style = "width: 100%; height: 100%;"
		this.append(input);
		k = false;
	}
});
