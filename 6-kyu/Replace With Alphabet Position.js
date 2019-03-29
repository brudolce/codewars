const alphabetPosition = text =>
  text.toUpperCase().replace(/[^A-Z]/g, '')
    .split('').map(e => e.charCodeAt(0) - 64).join(' ')
