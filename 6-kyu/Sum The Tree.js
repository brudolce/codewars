function sumTheTreeValues(root){
  let sum = 0;
  if(root.left) {
    sum += sumTheTreeValues(root.left)
  }
  sum += root.value;
  if(root.right)  {
    sum += sumTheTreeValues(root.right)
  }
  return sum;
}
