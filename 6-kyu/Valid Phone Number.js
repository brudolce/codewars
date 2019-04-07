function validPhoneNumber(phoneNumber){
  return /^\([0-9]{3}\)\s\d{3}\-\d{4}$/.test(phoneNumber)
}
