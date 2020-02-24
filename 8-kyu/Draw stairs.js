function drawStairs(n) {
   let str = ''
   for (let i=0;i<n;i++){
     str+=' '.repeat(i)+'I\n'
   }
   return str.slice(0,-1)
}
