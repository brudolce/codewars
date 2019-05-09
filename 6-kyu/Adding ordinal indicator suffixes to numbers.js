function numberToOrdinal(n) {
  let s = "th";
  if (n == 0) s = "";
  if (n % 10 == 1 && n % 100 != 11) s = "st";
  if (n % 10 == 2 && n % 100 != 12) s = "nd";
  if (n % 10 == 3 && n % 100 != 13) s = "rd";
  return n + s
}
