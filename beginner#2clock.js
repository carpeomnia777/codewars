function past(h, m, s){
  let secondsToMillisec = s * 1000;
  let minutesToMillisec = m * 60000;
  let hoursToMillisec = h * 3600000;

  return secondsToMillisec + minutesToMillisec + hoursToMillisec;
}