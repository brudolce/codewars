function ranking(people) {

if (people.length < 1) return []

  let arr = people.sort((a,b) => {
    if(a.points < b.points) { return 1 }
    if(a.points > b.points) { return -1 }
    if(a.name > b.name) { return 1 }
    if(a.name > b.name) { return -1 }
    return 0;
  })

  arr[0].position = 1;
  console.log (arr)
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i].points === arr[i-1].points) { 
      arr[i].position = arr[i-1].position
    } else {
      arr[i].position = i + 1
    }
  }
  
return arr
}
