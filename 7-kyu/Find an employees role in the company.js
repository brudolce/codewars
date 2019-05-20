function findEmployeesRole(name) {
  const foundEmployee = employees.find(
    ({ firstName, lastName }) => name === `${firstName} ${lastName}`
  )

  return foundEmployee ? foundEmployee.role : 'Does not work here!'
}
