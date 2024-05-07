if(window.location.href == "file:///C:/Users/admin/Desktop/anonymous/anonymous%20p30/0,66das.html"){
	let rent = document.getElementsByClassName('rent')[0].children;
	for(let i = 0; i < rent.length; i++){
		let button = rent[i].children[2];
		button.addEventListener("click", function(){
			if(document.getElementById("message")){
				message.children[1].addEventListener("click", function(){
					this.remove()
				});
			}else{	
			let div = document.createElement("div");
			let btn = document.createElement("button");
			let data = this.parentNode.children[0].innerHTML
			let p = document.createElement("p");		


			btn.innerHTML = "X";
			p.innerHTML = data == 'Hourly'? "You can get it for one hour for 1$" : data == "Daily" ? "You can get it for one day for 10$" : data == "Monthly" ? "You can get it for one month for 100$" : 'Yearly' ? "You can get it for one year for 1000$" : "0"
			div.id = "message";

			div.append(p);
			div.append(btn);
			btn.addEventListener("click", function(){
				message.remove();
			});
			// console.lop(data)
			document.body.append(div);

			div.classList.add("message");
			};
		});
	}
}

///////////////////////////////
if(window.location.href == "file:///C:/Users/admin/Desktop/anonymous/anonymous%20p30/about.html"){
	let k = true;
		more.addEventListener("click", function(){
			if(k == true){
				let div = document.createElement("div");
				this.parentNode.append(div);
				let close = document.createElement("div");
				let x = document.createElement("div");
				x.innerHTML = 'X';
				close.append(x);
				div.append(close);
				let p = document.createElement("p");
				let text = "This sport requires endurance, core and back strength, balance, bike handling skills, and self-reliance. Advanced riders pursue both steep technical descents and high-incline climbs. In the case of freeride, downhill, and dirt jumping, aerial maneuvers are performed off both natural features and specially constructed jumps and ramps.Mountain bikers ride on off-road trails such as singletrack, back-country roads, wider bike park trails, fire roads, and some advanced trails are designed with jumps, berms, and drop-offs to add excitement to the trail. Riders with enduro and downhill bikes will often visit ski resorts that stay open in the summer to ride downhill-specific trails, using the ski lifts to return to the top with their bikes. Because riders are often far from civilization, there is a strong element of self-reliance in the sport. Riders learn to repair broken bikes and flat tires to avoid being stranded. Many riders carry a backpack, including water, food, tools for trailside repairs, and a first aid kit in case of injury. Group rides are common, especially on longer treks. Mountain bike orienteering adds the skill of map navigation to mountain biking."
				pre.innerHTML = text.split(".").join(".br");
				div.classList.add("more_info");
				k = false;
				x.addEventListener("click", function(){
					div.remove();
					k = true;
				});
			};
		});
};