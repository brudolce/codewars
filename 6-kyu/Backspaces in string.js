function clean_string(s) {
  s = s.split``;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      s[i] = "";
      s[i - 1] = "";
      s = s.filter(v => v !== "");
      i -= 2;
    }
  }
  return s.join``;
}
