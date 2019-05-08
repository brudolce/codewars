function travel(r, zipcode) {
  const list = r.split`,` 
    .map((x) => {
      const addr = x.match(/(^\d+) ([a-zA-z.\s]+) ([A-Z]{2} \d+)$/);
      return {
        house: addr[1],
        street: addr[2],
        zip: addr[3],
      };
    });

  let streets = [];
  let houses = [];
  list.forEach((r) => {
    if (r.zip === zipcode) {
      streets.push(r.street);
      houses.push(r.house);
    }
  });
  return `${zipcode}:${streets.join(',')}/${houses.join(',')}`;
}

//clever sol
function travel(r, zipcode) {
  re = RegExp('(\\d+)\\s+(.+)\\s+'+zipcode+'$')
  streets = r.split(',').map(x=>x.match(re)).filter(x=>x)
  return zipcode+':'+streets.map(x=>x[2])+'/'+streets.map(x=>x[1])
}
