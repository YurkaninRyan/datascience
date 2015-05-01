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
    document.getElementById("logo__hindenburg").setAttribute("result", chancesh.toString());


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
    //If you're younger then 46 years old.
    if (age <= 46.5000) {
        // [11 died , 0 lived]
        chancesh.push(0);
        return false;
    //If you're older then 46 years old
    }else {
        //If you're younger then 61
        if (age <= 61.5000) {
            //If you're younger then 55
            if (age <= 55.5000) {
                //if you're younger then 51
                if (age <= 51.0000) {
                    // [0 died , 1 lived]
                    chancesh.push(100);
                    return true;
                //If you're older then 51 years old but less then 55 years old
                }else {
                    // [1 died , 0 lived]
                    chancesh.push(0);
                    return false;
                }
            //If you're olden then 55 years old but less then 61 years old
            }else {
                //[0 died , 3 lived]
                chancesh.push(100);
                return true;
            }
        //If you're older then 61 years old
        }else {
            //if you're younger then 70 years old
            if (age <= 70.5000) {
                // [4 died , 0 lived]
                chancesh.push(0);
                return false;
            //if you're older then 70 years old
            }else {
                //If you're upper or middle class
                if (ticket_class <= 2) {
                    //if you're upper class
                    if (ticket_class <= 1) {
                        //[0 died , 1 lived]
                        chancesh.push(100);
                        return true;
                    //If you're middle class
                    }else {
                        //[1 died , 4 lived]
                        if (Math.floor((Math.random() * 5) + 1) <= 1) {
                            chancesh.push(80);
                            return false;
                        }else {
                            chancesh.push(80);
                            return true;
                        }
                    }
                //If you're lower class
                }else {
                    //[1 died, 0 lived]
                    chancesh.push(0);
                    return false;
                }
            }
        }
    }
}
