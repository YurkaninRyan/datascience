	var QueryString = parseurl();
	var chancest = [];
	var survive = titanic_predict(QueryString.age, QueryString.gender, QueryString.class);
	var result;

	if (survive) {
	    result = "<span style='color:#0E673C; font-weight:bold;', serif;'>You Lived</span>"
	} else {
	    result = "<span style='color:#B72833; font-weight:bold;''>You died</span>"
	}
	document.getElementById("logo__titanic").innerHTML = result + ', with a ' + chancest[0] + '% survival rate on the Titanic.';
	document.getElementById("logo__titanic").setAttribute("result", chancest.toString());

/* Function that gets the arguments from the URL */
function parseurl () {
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
};
 
/* Function that predicts titanic data */
function titanic_predict(age, gender, ticket_class) {

	//If you're female
	if(gender <= 0.5000){
		//If you're upper or middle class. && female
		if(ticket_class <= 2) {
			//If you're middle class && female
			if(ticket_class == 2) {
				// [8 died , 70 lived] 90% chance to live
				if(Math.floor((Math.random() * 78) + 1) >= 8) {
					chancest.push(90);
					return true;
				}else{
					chancest.push(90);
					return false;
				}
			//If you're upperclass.
			}else {
				// [5 died , 97 lived] 95% chance to live.
				if(Math.floor((Math.random() * 102) + 1) >= 5) {
					chancest.push(95);
					return true;
				}else{
					chancest.push(95);
					return false;
				}
			}
		//lower class && female
		}else {
			//If you're younger then or are 13 && female
			if(age <= 13) {
				// [6 died , 1 lived]  15% chance to live
				if(Math.floor((Math.random() * 6) + 1) >= 6) {
					chancest.push(15);
					return true;
				}else{
					chancest.push(15);
					return false;
				}
			//If you're older then 13 && female
			}else {
				// [92 died , 54 lived]  37% chance to live
				if(Math.floor((Math.random() * 146) + 1) >= 92) {
					chancest.push(37);
					return true;
				}else{
					chancest.push(37);
					return false;
				}
			}
		}
	//If you're male
	}else{
		//if you're younger then or equal to 13.5 years old && male
		if(age <= 13.5) {
			//if you're upper or middle class && male
			if(ticket_class <= 2) {
				// [0 died , 9 lived] 100% chance to live
				chancest.push(100);
				return true;
			//If you're lower class && male
			}else {
				// [7 died , 5 lived] 42% chance to live
				if(Math.floor((Math.random() * 12) + 1) >= 7) {
					chancest.push(42);
					return true;
				}else{
					chancest.push(42);
					return false;
				}
			}
		//if you're older then 13.5 && male
		}else {
			//If you're lower or middle class
			if(ticket_class >= 2) {
				// [449 died , 47 lived]  10% chance to live
				if(Math.floor((Math.random() * 496) + 1) >= 449) {
					chancest.push(10);
					return true;
				}else{
					chancest.push(10);
					return false;
				}
			//You're rich and male and a bastard
			}else {
				// [95 died , 39 lived] 30% chance to live
				if(Math.floor((Math.random() * 134) + 1) >= 95) {
					chancest.push(30);
					return true;
				}else{
					chancest.push(30);
					return false;
				}
			}
		}
	}
}