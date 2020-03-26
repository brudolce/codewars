const findChildren = (santasList, children) => [...new Set(children.filter(name => santasList.includes(name)).sort())]
