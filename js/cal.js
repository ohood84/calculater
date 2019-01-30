

n1 = 2;
n2 = 4;
var add = function(n1, n2) {
  return (n1 + n2);
};
var sub = function(n1, n2) {
  return (n1 - n2);
};
var multi = function(n3, n4) {
  return n3 * n4
};
var divid = function(n1, n3) {
  return n1 / n2
};
var rema = function(n2, n4) {
  return n2 % n4
}


n1=prompt("Enter number1:");
n2=prompt("Enter number2:");

n1=parseInt(n1);
n2=parseInt(n2);
alert(n1+"+"+n2+"="+ add(n1,n2));
alert(n1+"-"+n2+"="+ sub(n1,n2));
alert(n1+"*"+n2+"="+ multi(n1,n2));
alert(n1+"/"+n2+"="+ divid(n1,n2));
alert(n1+"%"+n2+"="+ rema(n1,n2));
