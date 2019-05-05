function calculateTip(amount, rating) {
  return /^Excellent$/i.test(rating) ? Math.ceil(amount*0.2)
    : /^Great$/i.test(rating) ? Math.ceil(amount*0.15)
    : /^Good$/i.test(rating) ? Math.ceil(amount*0.1)
    : /^Poor$/i.test(rating) ? Math.ceil(amount*0.05)
    : /^Terrible$/i.test(rating)? 0
    : 'Rating not recognised'
}
