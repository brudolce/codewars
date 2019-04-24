function getIssuer(number) {
  number = String(number);
  if ((number.length===13 || number.length===16) && number.charAt(0)==='4') return 'VISA';
  if (number.length===15 && (number.substring(0,2)==='34'||number.substring(0,2)==='37')) return 'AMEX';
  if (number.length===16 && number.substring(0,4)==='6011') return 'Discover';
  if (number.length===16 && (
    number.substring(0,2)==='51'||
    number.substring(0,2)==='52'||
    number.substring(0,2)==='53'||
    number.substring(0,2)==='54'||
    number.substring(0,2)==='55')
    ) return 'Mastercard';
  return 'Unknown'
}

//RegEx solution
function getIssuer(n) {
  let s = n.toString();
  if (/^3[4|7]\d{13}$/.test(s)) return "AMEX";
  if (/^6011\d{12}$/.test(s)) return "Discover";
  if (/^5[1-5]\d{14}$/.test(s)) return "Mastercard";
  if (/^4(\d{12}|\d{15})$/.test(s)) return "VISA";
  return "Unknown";
}
