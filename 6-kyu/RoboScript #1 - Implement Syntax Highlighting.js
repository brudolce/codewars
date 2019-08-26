function highlight(code) {
  return code.replace(/(\d+)/gi,v=>{
  return `<span style="color: orange">${v}</span>`
  }).replace(/(L+)/g,v=>{
  return `<span style="color: red">${v}</span>`
  }).replace(/(R+)/g,v=>{
  return `<span style="color: green">${v}</span>`
  }).replace(/(F+)/g,v=>{
  return `<span style="color: pink">${v}</span>`
  })
}
