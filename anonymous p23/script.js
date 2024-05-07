// let user = {name: "Edmon", surname: "Arzumanyan", age:25, profession: "programmer"};
// console.log(user.name)
//////////////////////////////////////
// let user = {
// 	name: "Edmon", 
// 	surname: "Arzumanyan", 
// 	age:25, profession: "programmer",
// 	hobbies: {
// 		Reading: "books",
// 		Riding: "Cars"
// 	}
// };
// console.log(Object.keys(user));
//////////////////////////////////////
// console.log(Object.values(user));
//////////////////////////////////////
// let x = Object.keys(user);
// console.log(x);
//////////////////////////////////////


// let users = [];
// btn.addEventListener("click", ()=>{
// 	let user = {
// 		name: nm.value,
// 		surname: snm.value,
// 		tel_number: tel.value,
// 		email: em.value,
// 		password: pas.value,
// 		// get: function(){
// 		// 	return "Name:" +this.name+", Surname:"+this.surname;
// 		// }
// 	}
// 	// document.write(user.get())
// 	users.push(user);
// 	let input = document.getElementsByTagName('input');
// 	for(let i = 0; i<input.length; i++){
// 		input[i].value = ""
// 	}
// 	users.forEach((e,i)=>{
// 		localStorage.setItem("AllUsers"+i, Object.values(e)); 
// 	});
// });
//////////////////////////////////////

let x=["Nan", "HDdsaf", "fdgFHDF", 100];
x.forEach((e,i)=>{
	console.log(e)
});