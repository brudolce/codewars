const partlist = arr =>
  arr.reduce((result, e, index) => {
    if (index === 0) return result
    const subarray = [arr.slice(0, index).join(' '), arr.slice(index).join(' ')]
    return result.concat([subarray])
  }, [])
