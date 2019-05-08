const checkExam = (a,b) => {
  let r =b.reduce((acc,e,i)=> acc + (e===''?0:a[i]===b[i]?4:-1) ,0)
  return r < 0 ? 0 : r
}
