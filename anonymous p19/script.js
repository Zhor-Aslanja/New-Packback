// let week = ["Mon", "Tue", "Wed", "Thu", "Fri"];
// let table = document.createElement("table");
// for(let i=0; i<7; i++){
// 	let tr = document.createElement("tr");
// 	if(i==0){
// 		let td= document.createElement("td");
// 		td.colSpan = "6";
// 		td.innerHTML = "Time Table";
// 		tr.append(td);
// 	}

// 	else if(i == 1){
// 		for(let j=0; j<6; j++){
// 		if(j==0){
// 			let td = document.createElement("td");
// 			td.rowSpan= "6";
// 			tr.append(td);
// 			td.innerHTML = "Hours";
// 			}else if(j > 0){
// 				let td= document.createElement("td");
// 				td.innerHTML = week[j-1]
// 				tr.append(td);
// 			}
// 		}
// 	}

// 	else if(i==4){
// 		let td = document.createElement("td");
// 		td.colSpan = "5";
// 		td.innerHTML = "Lunch";
// 		tr.append(td);
// 	}


// 	else{
// 		for(let j=1; j<6; j++){
// 			let td;
// 			if(i>1){
// 				if(j%2==0){
// 					td = document.createElement("td");
// 					td.innerHTML = "Math";
// 				}else{
// 					td = document.createElement("td");
// 					td.innerHTML = "Computer";
// 				}
// 				if(j==5 && i<4){
// 					td = document.createElement("td");
// 					td.innerHTML = "Arts";
// 				}
// 				if(i==5 && j==5){
// 					td = document.createElement("td");
// 					td.innerHTML = "Project";
// 					td.rowSpan = "2";
// 				}
// 			}
// 			tr.append(td);
// 		}
// 	}
// 	table.append(tr);
// }
// table.border = "1";
// document.body.append(table);
// let td = document.getElementsByTagName("td");
// td[td.length-1].remove();


let image =["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", "https://img.freepik.com/premium-photo/lake-braies-landscape-simple-education_956920-35983.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1698796800&semt=sph", "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"];
for(let i=0; i<image.length; i++){
	let img = document.createElement("img");
	img.src = image[i];
	img.addEventListener("click", (obj)=>{
		obj.target.classList.toggle("active")
	});
	document.body.append(img);
}