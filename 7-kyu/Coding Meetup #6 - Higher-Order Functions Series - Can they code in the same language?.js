function isSameLanguage(list) {
  const lang = list[0].language
  return list.every(x=>x.language === lang)
}
