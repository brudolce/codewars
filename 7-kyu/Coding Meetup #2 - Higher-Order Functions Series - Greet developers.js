function greetDevelopers(list) {
  list.forEach(v=> v.greeting= `Hi ${v.firstName}, what do you like the most about ${v.language}?`)
  return list
}
