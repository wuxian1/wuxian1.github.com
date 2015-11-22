function save(what,param2) {
	if(what=="local") {
		localStorage.chickensgamesave=save("string");
		$("#mutenotif").html("Game saved").animate({"bottom":"-30px"},1000);
		setTimeout(function() {
			$("#mutenotif").animate({"bottom":"-82px"},1000);
		},2000);
	}
	else if(what=="load") {
		save("splitter");
	}
	else if(what=="export") {
		prompt("下方是游戏存档代码",save("string"));
	}
	else if(what=="import") {
		code=prompt("导入游戏Code (导入之后游戏将自动保存)","");
		if(code!=null && code!="") {
			save("splitter",code);
			save("local");
			window.location=self.location;
		}
	}
	else if(what=="autosave") {
		if(autosave) {
			autosave=false;
			if(typeof autosaveinterval !== "undefined")clearInterval(autosaveinterval);
			alert('Autosave disabled');
		}
		else {
			autosave=true;
			autosaveinterval=setInterval(function() {
				autosavetime--;
				if(autosavetime==0) {
					autosavetime=60;
					save("local");
				}
				$("#autosave-cd").html(autosavetime);
			},1000);
			alert('Autosave enabled');
		}
	}
	else if(what=="string") {
		return btoa(items[0].owned+"|"+items[1].owned+"|"+items[2].owned+"|"+items[3].owned+"|"+items[4].owned+"|"+items[5].owned+"|"+items[6].owned+"|"+items[7].owned+"|"+items[8].owned+"|"+items[9].owned);
		update();
	}
	else if(what=="splitter") {
	
		if(typeof param2 === "undefined") {
			tehcodez=localStorage.chickensgamesave;
		}
		else {
			tehcodez=param2;
		}
		
		tehcodez=atob(tehcodez).split("|");
		
		items[0].owned = parseFloat(tehcodez[0]);
		items[1].owned = parseFloat(tehcodez[1]);
		items[2].owned = parseFloat(tehcodez[2]);
		items[3].owned = parseFloat(tehcodez[3]);
		items[4].owned = parseFloat(tehcodez[4]);
		items[5].owned = parseFloat(tehcodez[5]);
		items[6].owned = parseFloat(tehcodez[6]);
		items[7].owned = parseFloat(tehcodez[7]);
		items[8].owned = parseFloat(tehcodez[8]);
		items[9].owned = parseFloat(tehcodez[9]);
		
		if(breedinterval<1500) {
			breedinterval+=1000;
		}
		
		update();

	}
}
/*RANDOM*/
