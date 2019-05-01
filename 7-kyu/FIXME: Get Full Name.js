class Dinglemouse{

  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName(){
    const { firstName, lastName } = this
    return (firstName+" "+lastName).trim();
  }
  
}

//clever thing
class Dinglemouse {
  constructor(firstName, lastName) {
    Object.assign(this, { firstName, lastName })
  }

  getFullName() {
    const { firstName, lastName } = this
    return `${firstName} ${lastName}`.trim()
  }
}
