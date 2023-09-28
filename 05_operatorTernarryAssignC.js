
console.log("================================================== part 1 =============================================");
function maleMarriageEligibility(gender,age,boyName) {
  var result= gender == "male" &&   age>=21 ? `hey ${boyName} you are eligible for Marriage`: `hey ${boyName} you are not eligible for Marriage`;
  return result;
}

var result1= maleMarriageEligibility("male",19,"krish")

console.log(result1);

var result2=maleMarriageEligibility("female",55,"steve jobs")
console.log(result2);

console.log("================================================== part 2 =============================================");
function femaleMarriageEligibility(gender,age,girlName){
    var result=gender=="female" && age>=18 ?`hey ${girlName} you are eligible for Marriage`: `hey ${girlName} you are not eligible for Marriage`;
    return result;
    
}
var result3 = femaleMarriageEligibility("female",10,'jennifer')
console.log(result3);
var result4 = femaleMarriageEligibility("female",55,'Malinda gates')
console.log(result4);
