var USA = new Array('Select state', 'Alabama', 'Alaska', 'Arizona', 'Arkansas',
  'California');
var len;

function Add_option_to_select(CountryObj, StateObj) {
  var CountryObj = document.getElementById(CountryObj);
  var StateObj = document.getElementById(StateObj);
  var selind = CountryObj.options.selectedIndex;
  switch (selind) {
    case 1:
    case 3:
    case 4:
    case 5:
      StateObj.options.length = 0;
      StateObj.disabled = "disabled";
      break;
    case 2:
      StateObj.options.length = 0;
      StateObj.disabled = false;
      len = USA.length;
      for (var i = 0; i < len; i++) {
        StateObj[i] = new Option(USA[i], i);
      }
      break;
  }
}
