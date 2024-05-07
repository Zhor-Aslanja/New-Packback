// let user={first_name:"Edmon",last_name:"Arzumanyan",age:"25"}
// console.log(user["first_name"]); 
//or
// console.log(user.first_name);


let user={
	first_name:"Edmon",
	last_name:"Arzumanyan",
	age:"25",
	fullname: function(){return this.first_name+" "+this.last_name}
};
// console.log(user.fullname())
// console.log(Object.values(user));
// console.log(Object.keys(user));


for(let e of Object.keys(user)){
	e = e+" User"
}
console.log(user)