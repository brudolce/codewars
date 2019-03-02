
function phone(s, n) {
  const arr = s.split(/\n/g);

  return arr.reduce((acc,curr,v,arr) => {
    const exactPhoneRegEx = new RegExp(`${n}`, 'g');
    const phoneRegEx = new RegExp(/.?\d?.?\d{2,3}.?\d{3}.?\d{4}/, 'g');
    const nameRegEx = new RegExp(/\<\s?\D+\s?\D{0,}\s?\>/, 'g');
    let retString = '';
    let phoneArr = [];
    let nameArr = [];
    let addrArr = [];

    for(let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (item.match(nameRegEx) && item.match(exactPhoneRegEx)) {
        nameArr.push(item.match(nameRegEx)[0].replace(/\<\s?(\D\s?\D{0,})\s?\>/g, '$1').trim())
        phoneArr.push(item.match(exactPhoneRegEx)[0])
        item = item.replace(phoneRegEx, '');
        item = item.replace(nameRegEx, '');
        addrArr.push(item.replace(/[/$!?*;:,+]+/g, '').trim());
      };
    }

    if (!phoneArr.find(p => phoneRegEx.test(p))) return `Error => Not found: ${n}`;
    if (phoneArr.length > 1) return `Error => Too many people: ${n}`;

    retString += `Phone => ${phoneArr[0]}, `;
    retString += `Name => ${nameArr[0]}, `;
    retString += `Address => ${addrArr[0]}`.replace(/\_/g, ' ').replace(/\s{2,}/g, ' ');

    return retString;
  });
}
