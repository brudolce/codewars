function byState(str) {
  let arr = str.replace(/,/g,"").split`\n`;
  let states = [["AZ","Arizona"],
                ["CA","California"],
                ["ID","Idaho"],
                ["IN","Indiana"],
                ["MA","Massachusetts"],
                ["OK","Oklahoma"],
                ["PA","Pennsylvania"],
                ["VA","Virginia"]];
  let result = "";
  states.forEach(([s,i]) => {
    let arr0 = arr.filter(x => x.slice(-2) === s).sort();
    if(arr0.length){
      result += "\r\n " + i + "\r\n";
      result += arr0.map(x => `..... ${x.slice(0,-3)} ${i}`).join`\r\n`;
    }
  });
  return result.slice(3);
}
