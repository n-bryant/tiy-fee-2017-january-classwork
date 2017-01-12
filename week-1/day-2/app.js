mySpan = document.getElementById("dynamic-foot");
mySpan.textContent += new Date().getFullYear() + " The Republic";

var today = new Date();
var formattedDay = getFormattedDate(today)
document.getElementById("app-date").value = formattedDay;

function getFormattedDate(date) {
  var yyyy = today.getFullYear().toString();
  var mm = (today.getMonth() + 1).toString(); // getMonth method starts at 0 for January
  var dd = today.getDate().toString();

// pads earlier days and months with a 0
  if (parseInt(dd) < 10) {
    dd = "0" + dd;
  }
  if (parseInt(mm) < 10) {
    mm = "0" + mm;
  }
  return yyyy + "-" + mm + "-" + dd;
}
//console.log(formattedDay);
