function passHash(str) {
  return crypto.createHash('md5').update(str).digest('hex')
}
