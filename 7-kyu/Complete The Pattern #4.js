function pattern(n) {
 var number = "", output = "";
 while (n > 0) {
   number = n + number;
   output = number + (output ? "\n" : "") + output;
   n--;
 }
 return output;
}
