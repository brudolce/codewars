const Harshad = ( function() {

  return {
    isValid: function(number) {
      if(number <= 10) return true;
      let numArr = number.toString().split('');	
		  let counter = 0;
		  for(var i=0; i<numArr.length; i+=1) counter += parseInt(numArr[i]);
	    
      return number % counter === 0 
    },

    getNext: function(number) {
      number+=1;
      while(!(this.isValid(number))) number +=1;
        
      return number;
    },

    getSerie: function(count, start=0) {
      let arr = [];
      for(let i=0; i<count; i+=1) {
      	let next = this.getNext(start);
      	arr.push(next);
      	start = next;
      }
      return arr;
    }
  };

} () );
