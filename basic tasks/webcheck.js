let useremail = "adc456";
let pass = "54842189428184985";
//let pass = "485752871";
let usercheck = function(email) {
  if (email.includes(45) && email.length > 5) {
    return true;
  }
  return false;
};
let passwrd = function(pass) {
  if (pass.includes(28) && pass.length > 6) {
    return true;
  }
  return false;
};
console.log(usercheck(useremail));
console.log(passwrd(pass));
