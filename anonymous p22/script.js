let week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Oug", "Sep", "Oct", "Nov", "Dec"];
let time = setInterval(()=>{
	let nytz = new Date().toLocaleString("en-US", { timeZone: "America/New_York" }).split(",")[1].replace("AM"," ");
	nytz = nytz.split(":");
	nytz[0] = nytz[0].replace(" ","");
	if(nytz[0].length<2){
		nytz = nytz.join(":")
		nytz = "0" +nytz;
	}else{
		nytz= nytz.join(":")
	}
	nyt.innerHTML = nytz;
	
	let ltz = new Date().toLocaleString("en-US", { timeZone: "Europe/London" }).split(",")[1].replace("AM"," ");
	lt.innerHTML = ltz;
	let ztz = new Date().toLocaleString("en-US", { timeZone: "Europe/Zurich" }).split(",")[1].replace("AM"," ");
	zt.innerHTML = ztz;
	let ttz = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }).split(",")[1].replace("PM"," ");
	tt.innerHTML = ttz;
	let stz = new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }).split(",")[1].replace("PM"," ");
	st.innerHTML = stz;

	let dt = new Date;
	date.innerHTML = dt.getFullYear()+ ", month:"+month[dt.getMonth()]+ ", week:"+week[dt.getDay()]+", day:"+dt.getDate();
}, 1000);