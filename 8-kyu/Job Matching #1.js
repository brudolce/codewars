function match({minSalary}, {maxSalary}) {
if (!minSalary || !maxSalary) throw new Error('')
return minSalary*0.9<=maxSalary
}
