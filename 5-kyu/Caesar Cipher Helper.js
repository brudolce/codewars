class CaesarCipher {
  constructor(num){
    this.num = num
    this.alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  }
  
  encode(str){
    let res = ''
    str = str.toLowerCase()
    for (let letter of str){
      let ind =  this.alph.indexOf(letter)
      if (ind != -1) {
        res += this.alph[(ind+this.num)%this.alph.length]
      } else {
        res += letter
      }
    }
    return res.toUpperCase()
  }

  decode(str){
    let res = ''
    str = str.toLowerCase()
    for (let letter of str){
      let ind =  this.alph.indexOf(letter)
      if (ind != -1) {
        ind = ind-this.num;
        if(ind < 0) ind = this.alph.length + ind;
        res += this.alph[ind]
      } else {
        res += letter
      }
    }
    return res.toUpperCase()
  }

}

