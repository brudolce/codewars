
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
enteredCode === correctCode &&
new Date(currentDate).getTime() <= new Date(expirationDate).getTime()