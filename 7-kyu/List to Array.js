const listToArray = list =>  list === null ? [] : [list.value].concat(listToArray(list.next))
