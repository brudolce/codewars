//Write a class function named repeat() that takes
//two arguments (a string and a long integer), and 
//returns a new string where the input string is 
//repeated that many times. For example:

function repeater(string, n){
    newa = ''
    for(i=1;i<=n;i+=1){
        newa += string
    }
    return newa;
  }

