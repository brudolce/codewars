const findLongest = array => array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a))
