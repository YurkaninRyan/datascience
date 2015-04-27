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

	if(gender <= 0.5000){
		if(ticket_class <= 2) {
			if(ticket_class == 2) {
				// [8,70]
				if(Math.floor((Math.random() * 78) + 1) <= 8) {
					chancest.push(10);
					return true;
				}else{
					chancest.push(10);
					return false;
				}
			}else {
				// [5,97]
				if(Math.floor((Math.random() * 102) + 1) <= 5) {
					chancest.push(5);
					return true;
				}else{
					chancest.push(5);
					return false;
				}
			}
		}else {
			if(age <= 13) {
				// [6,1]
				if(Math.floor((Math.random() * 6) + 1) <= 6) {
					chancest.push(99.9);
					return true;
				}else{
					chancest.push(99.9);
					return false;
				}
			}else {
				// [92,54]
				if(Math.floor((Math.random() * 146) + 1) <= 92) {
					chancest.push(63);
					return true;
				}else{
					chancest.push(63);
					return false;
				}
			}
		}
	}else{
		if(age <= 13.5) {
			if(ticket_class <= 2) {
				// [0,9]
				chancest.push(0.1);
				return false;
			}else {
				// [7,5]
				if(Math.floor((Math.random() * 12) + 1) <= 7) {
					chancest.push(58);
					return true;
				}else{
					chancest.push(58);
					return false;
				}
			}
		}else {
			if(ticket_class >= 2) {
				// [449,47]
				if(Math.floor((Math.random() * 496) + 1) <= 449) {
					chancest.push(42);
					return true;
				}else{
					chancest.push(42);
;					return false;
				}
			}else {
				// [95,39]
				if(Math.floor((Math.random() * 134) + 1) <= 95) {
					chancest.push(70);
					return true;
				}else{
					chancest.push(70);
					return false;
				}
			}
		}
	}
}