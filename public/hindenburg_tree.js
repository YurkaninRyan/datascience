var QueryString = parseurl();
var chancesh = [];
var survive = hind_predict(QueryString.age, QueryString.gender, QueryString.class);
var result;

if (survive) {
    result = "<span style='color:#0E673C; font-weight:bold;'>You Lived</span>"
} else {
    result = "<span style='color:#B72833; font-weight:bold;'>You died</span>"
}
document.getElementById("logo__hindenburg").innerHTML = result + ', with a ' + chancesh + '% survival rate on the Hindenburg.';




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
function hind_predict(age, gender, ticket_class) {
    if (age <= 46.5000) {
        chancesh.push(0.1);
        return false;
        // [11,0]
    }else {
        if (age <= 61.5000) {
            if (age <= 55.5000) {
                if (age <= 51.0000) {
                    chancesh.push(99);
                    return true;
                    // [0,1]
                }else {
                    chancesh.push(0.1);
                    return false;
                    // [1,0]
                }
            }else {
                chancesh.push(98);
                return true;
                // [0,3]
            }
        }else {
            if (age <= 70.5000) {
                chancesh(0.1);
                return false;
                // [4,0]
            }else {
                if (ticket_class <= 2) {
                    if (ticket_class <= 1) {
                        chancesh.push(99);
                        return true;
                        // [0,1]
                    }else {
                        if (Math.floor((Math.random() * 5) + 1) <= 1) {
                            chancesh.push(80);
                            return false;
                        }else {
                            chancesh.push(80);
                            return true;
                        // [1,4]
                        }
                    }
                }else {
                    chancesh.push(0.1);
                    return false;
                    // [1,0]
                }
            }
        }
    }
}
