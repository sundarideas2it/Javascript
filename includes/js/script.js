/*** JavaScript v1.0 */

function dateformat(format) {
  console.log(format);
  /**** Date function **/
  var odate = new Date();
  var date = odate.getDate();
  var month = odate.getMonth()+1;
  var year = odate.getFullYear();

  switch (format) {
    case 'mm-dd-yyyy':
      outputformat = month+"-"+date+"-"+year;
      break;
    case 'mm/dd/yyyy':
      outputformat = month+"/"+date+"/"+year;
      break;
    case 'dd-mm-yyyy':
      outputformat = date+"-"+month+"-"+year;
      break;
    case 'dd/mm/yyyy':
      outputformat = date+"/"+month+"/"+year;
      break;
    default:

  }
  if(format != "")
    document.getElementsByName(format)[0].innerHTML = outputformat;
}

function swap() {
  var givenstring = document.getElementById('givenstring').value;
  if(givenstring.trim() == ""){
    alert("Enter the value and try!");
    return false;
  }
  var fchar = givenstring.substr(0, 1);
  var lchar = givenstring.substr(givenstring.length-1, 1);
  var mchars = givenstring.substr(1, givenstring.length-2);
  var resultstring = lchar+mchars+fchar;
  document.getElementById('resultstring').innerHTML = resultstring;
}

function findlargest() {
  /**** Find largest word in a text **/
  var inputstring = document.getElementById('inputstring').value;
  if(inputstring.trim() == ""){
    alert("Enter the value and try!");
    return false;
  }
  var strarray = inputstring.split(" ");
  var lenstr = 0;
  var outputstring = "";
  for (var i = 0; i < strarray.length; i++) {
    if(lenstr <= strarray[i].length){
      if(outputstring.length == strarray[i].length)
        outputstring = outputstring+","+strarray[i];
      else
        outputstring = strarray[i];
      lenstr = strarray[i].length;
    }
  }
  document.getElementById('outputstring').innerHTML = outputstring;

}

function amounttocoins() {
  /**** Amount into coins **/
  var amount = document.getElementById('amount').value;
  if(amount.trim() == ""){
    alert("Enter the value and try!");
    return false;
  }
  var coins = [25,10,5,2,1];
  var tamount = amount;
  var change = [];

  for (var i = 0; i < coins.length; i++) {
    for (var j = coins[i]; j <= tamount; j+coins[i]) {
      tamount = tamount - coins[i];
      change.push(coins[i]);
    }
  }
  //document.getElementById('amount').innerHTML = amount;
  document.getElementById('coins').innerHTML = coins;
  document.getElementById('change').innerHTML = change;

}

function arraytostring(style) {
  /*** Array to string **/
  var giventype = ["Red", "Green", "White", "Black"];

  var separater = document.getElementById('separater').value;
  if(separater.trim() == ""){
    alert("Enter the value and try!");
    return false;
  }
  document.getElementById('resulttype').innerHTML = giventype.join(separater);
}
