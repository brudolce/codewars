function mostMoney(students) {  
  if(students.length == 1)
    return students[0].name;
  let most = ((students[0].fives * 5) + (students[0].tens * 10) + (students[0].twenties * 20)), equal = 1,
      newMoney = 0, studentName = students[0].name;
  for(let i = 1; i < students.length; i++){
    newMoney = ((students[i].fives * 5) + (students[i].tens * 10) + (students[i].twenties * 20));
    if(newMoney == most)
      equal++;
    if(newMoney >= most){
      most = newMoney;
      studentName = students[i].name;
    }
  }
  if(equal == students.length)
    return "all";
  return studentName;
}
