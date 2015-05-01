var QueryString = parseurl();
var chancesl = [];
var survive = predict(QueryString.age, QueryString.gender, QueryString.class);
var result;

if (survive) {
    result = "<span style='color:#0E673C; font-weight:bold;'>You Lived</span>"
} else {
    result = "<span style='color:#B72833; font-weight:bold;'>You died</span>"
}
document.getElementById("logo__lusitania").innerHTML = result + ', with a ' + chancesl + '% survival rate on the Lusitania.';




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


/* Function that does the actual prediction of life or death. */
function predict (age, gender,  ticket_class) {
    /* If you're younger then 32 */
    if (age <= 32.1447) {
        /* If you're younger then 6 1/2 years old */
        if (age <= 6.5000) {
            /* If you're younger then 2 1/2 years old, You have a 22% chance to live. [35 died , 10 lived] */
            if (age <= 2.5000) { if (Math.floor((Math.random() * 45) + 1) <= 35) { chancesl.push(22); return false; } else { chancesl.push(22); return true; } }
            /* If you're between 6 1/2 years old and 2 1/2 years old you have a 30% chance to live [21 died, 9 lived] */
            else { if (Math.floor((Math.random() * 30) + 1) <= 21) { chancesl.push(30); return false; } else { chancesl.push(30); return true; } }
        }
        /* If you're between 32 and 6 1/2 years old */
        else {
            /* If you're between 30 and 6 1/2 years old you have a 45% chance to live [207 died, 107 lived] */
            if (age <= 30.5000) { if (Math.floor((Math.random() * 379) + 1) <= 207) { chancesl.push(45); return false; } else { chancesl.push(45); return true; } }
            /* If you're between 32 and 30 years old you have a 38% chance to live [27 died, 44 lived] */  
            else { if (Math.floor((Math.random() * 71) + 1) <= 27) { chancesl.push(62); return false; } else { chancesl.push(62); return true; } }
        }
    }
    /* If you're older then 32 */
    else {
        /* If you're between 32 and 56 years old */
        if (age <= 56.5000) {
            /* If you're middle class or upper class then you have a 60% chance to live [404 died , 262 lived] */
            if (ticket_class >= 2) { if (Math.floor((Math.random() * 664) + 1) <= 404) { chancesl.push(40); return false; } else { chancesl.push(40); return true; } }
            /* If you're lower class then you have a 69% chance to live [154 died , 69 lived] */
            else { if(Math.floor((Math.random() * 223) + 1) <= 154) { chancesl.push(31); return false; } else { chancesl.push(31); return true; } }
        }
        /* If you're older then 56 years old */
        else {
            /*If you're lower class then you have a 76% chance to live [35 died , 11 lived]*/
            if (ticket_class >= 3) { if (Math.floor((Math.random() * 46) + 1) <= 35) { chancesl.push(76); return false; } else { chancesl.push(76); return true; } }
            /*If you're middler or upper class then you have a 10% chance to live [9 died , 1 lived] */
            else { if (Math.floor((Math.random() * 10) + 1) <= 9){ chancesl.push(10); return false; } else { chancesl.push(10); return true; } }
        }
    }
}
