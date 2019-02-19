const alienLanguage = str => str.split(' ').map(x => x.slice(0, x.length - 1).toUpperCase() + x[x.length - 1].toLowerCase()).join(' ');
