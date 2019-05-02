function maxBall(v0) {
  v0 *= 1000/360;
  const g = 9.81, secondsToTenths = 10;
  return Math.round(v0/g);
}
