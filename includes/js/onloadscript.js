/*** JavaScript v1.0 */

window.onload = function() {
  /**** Date function **/
  var odate = new Date();
  var date = odate.getDate();
  var month = odate.getMonth()+1;
  var year = odate.getFullYear();

  var format = document.getElementsByName('format');
  for (var i = 0; i < format.length; i++) {
    var dformat = format[i].innerHTML;

    switch (dformat) {
      case 'mm-dd-yyyy':
        format[i].innerHTML = month+"-"+date+"-"+year;
        break;
      case 'mm/dd/yyyy':
        format[i].innerHTML = month+"/"+date+"/"+year;
        break;
      case 'dd-mm-yyyy':
        format[i].innerHTML = date+"-"+month+"-"+year;
        break;
      case 'dd/mm/yyyy':
        format[i].innerHTML = date+"/"+month+"/"+year;
        break;
      default:

    }
  }

  /**** String function **/
  var givenstring = document.getElementById('givenstring').innerHTML;
  var fchar = givenstring.substr(0, 1);
  var lchar = givenstring.substr(givenstring.length-1, 1);
  var mchars = givenstring.substr(1, givenstring.length-2);
  var resultstring = lchar+mchars+fchar;
  document.getElementById('resultstring').innerHTML = resultstring;

  /**** Find largest word in a text **/
  var inputstring = document.getElementById('inputstring').innerHTML;
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

  /*** Array to string **/
  var sarray = ["Red", "Green", "White", "Black"];
  document.getElementById('stype1').innerHTML = sarray.toString();
  document.getElementById('stype2').innerHTML = sarray.join("+");
  document.getElementById('stype3').innerHTML = sarray.join("-");

  /**** Amount into coins **/
  var amount = 46;
  var coins = [25,10,5,2,1];
  var tamount = amount;
  var change = [];

  for (var i = 0; i < coins.length; i++) {
    for (var j = coins[i]; j <= tamount; j+coins[i]) {
      tamount = tamount - coins[i];
      change.push(coins[i]);
    }
  }
  document.getElementById('amount').innerHTML = amount;
  document.getElementById('coins').innerHTML = coins;
  document.getElementById('change').innerHTML = change;

}/*** End onload **/
