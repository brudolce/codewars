const sFilter = s => !s || /[^a-z]/i.test(s) ? '' : s.toUpperCase()

const sValue = (s) =>
  sFilter(s).split('').reduce((a, e) => a + e.charCodeAt(), 0)

const compare = (s1, s2 ) => sValue(s1) === sValue(s2)
