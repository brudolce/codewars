function string(value, unit) {
  if (value > 0) {
    return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
  }
  return '';
}

function formatDuration (seconds) {
  if (seconds === 0) { 
    return "now";
  }
  
  //seting time
  let tmpSeconds = seconds;
  const MIN = 60;
  const HR = MIN * 60;
  const DAY = HR * 24;  
  const YEAR = DAY * 365;
   
   
  let numYears = Math.floor(tmpSeconds / YEAR);
  tmpSeconds -= numYears * YEAR;
  let numDays = Math.floor(tmpSeconds / DAY);
  tmpSeconds -= numDays * DAY;
  let numHrs = Math.floor(tmpSeconds / HR);
  tmpSeconds -= numHrs * HR;
  let numMins = Math.floor(tmpSeconds / MIN);
  let numSecs = tmpSeconds - numMins * MIN;
  
  let formattedStr = string(numYears, 'year');
  formattedStr += string(numDays, 'day');
  formattedStr += string(numHrs, 'hour');
  formattedStr += string(numMins, 'minute');
  formattedStr += string(numSecs, 'second');
  
  // trim last one
  let idx = formattedStr.lastIndexOf(', ');
  formattedStr = formattedStr.substring(0, idx);
  
  // replace the second last , with and
  idx = formattedStr.lastIndexOf(', ');
  if (idx > 0) {
    formattedStr = formattedStr.substring(0, idx) + ' and ' + formattedStr.substring(idx + 2);
  }
  return formattedStr;
}
