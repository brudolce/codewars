//clever solution
function determinant(m) {
  if (m.length == 0) return 0;
  if (m.length == 1) return m[0][0];
  if (m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  if (m.length > 2) {
    return m.reduce((prev, curr, i, arr) => {
      let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));
      return prev + (i % 2 == 0 ? 1 : -1 ) * curr[0] * determinant(miniArr);
    }, 0);
  }
};

//sol #1
function determinant(m) {
  if (m.length == 1)
    return m[0][0];
  function calc(matrix)
  {
    if (matrix.length == 2)
      return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
    let res = 0, sign = 1;
    for (let i = 0; i < matrix[0].length; i++)
    {
      let temp = [];
      for (let j = 1; j < matrix.length; j++)
      {
        temp.push([]);
        for (let k = 0; k < matrix[0].length; k++)
        {
          if (k != i)
            temp[j-1].push(matrix[j][k]);
        }
      }
      res += matrix[0][i] * sign * calc(temp.slice());
      sign *= -1;
    }
    return res;
  }
  return calc(m);
};
