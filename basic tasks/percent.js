let mynumber = function(number, totalnumber) {
  let percent = (number / totalnumber) * 100;
  let mygrade = "";
  if (percent >= 90) {
    mygrade = "A";
  } else if (percent >= 80) {
    mygrade = "B";
  } else if (percent >= 70) {
    mygrade = "C";
  } else if (percent >= 60) {
    mygrade = "D";
  } else if (percent >= 50) {
    mygrade = "E";
  } else {
    mygrade = "F";
  }
  return `your percentage is : ${percent} and your grade is : ${mygrade}`;
};
let ret = mynumber(92, 100);
console.log(ret);
