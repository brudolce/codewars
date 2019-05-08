const checkExam = (a,b) => (r =b.reduce((acc,e,i)=> acc + (e===''?0:a[i]===b[i]?4:-1) ,0)) < 0 ? 0 : r
