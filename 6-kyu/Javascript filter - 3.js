function searchNames( logins ){
  return logins.filter((x,i,arr)=>/^\.|\.$/g.test(arr[i-1]))
}
