// let x=1;
// let y="1";
// let z=[1];
// let k={}; 
// console.log(typeof x,typeof y,typeof z,typeof k);

// let user={name:"Edmon"};
// console.log(user);

// let user={name:"Edmon", surname:"Arzumanyan"};
// console.log(user["name"]+" "+user.surname);

reg.addEventListener("click",myf);

function myf(){
	let us = {
		name: nm.value,
		surname: sn.value,
		email: em.value,
		password: pas.value,
		rep_pas: pass.value,
	}

    if(us.name!="" && us.surname!="" && us.email!="" && us.password!="" && us.password==us.rep_pas){
		window.localStorage.setItem("myObject", JSON.stringify(us));
		location.reload();
		document.getElementsByClassName("login")[0].style="display: flex;"
    }else{
    	let div=document.createElement("div")
    	div.innerHTML="Incorrect Data, please write correctly";
    	div.classList.add("message")
    	document.body.append(div)
    }
}
if(window.localStorage.getItem("myObject")){
	document.getElementsByClassName("register")[0].style="display: none;"
	document.getElementsByClassName("login")[0].style="display: flex;"
	let user = window.localStorage.getItem("user");
	user = JSON.parse(user)
	console.log(user);
	log_but.addEventListener("click",()=>{
		if(log_em.value == user.email && log_pas.value == user.password){
			document.getElementsByClassName('login')[0].style="display: none;"
			document.getElementsByClassName('page')[0].style="display: flex;"
		}else{
    	let div=document.createElement("div")
    	div.innerHTML="Incorrect Data, please write correctly";
    	div.classList.add("message")
    	document.body.append(div)
		}
	});
}
window.localStorage.setItem("anun", JSON.stringify("Edmon"));
let anun=window.localStorage.getItem("anun");
console.log(JSON.parse(anun));