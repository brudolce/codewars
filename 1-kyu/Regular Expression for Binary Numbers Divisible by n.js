//my solution took 700 lines of code and is really messy
//putting the best practice/voted/refactored solution to this problem


function regexDivisibleBy(n) {
  if (n==1) return '^[01]+$'  // Special case
  let a = []  // List of nodes
  for (let i=0; i<n; i++) a[i] = {}  // Node
  for (let i=0; i<n; i++) {
    a[i].id = i            // Used for indentification below
    a[i][i*2%n] = '0'      // Keys in nodes are id refs to other nodes
    a[i][(i*2+1)%n] = '1'  // Values in nodes are the required chars to get to next node (the key)
  }
  
  const removeGroups = re => re.includes('(') ? removeGroups(re.replace(/\([^(]*?\)/g,'')) : re  // Removes anything inside `()`; exposes chars at root level only
  const ors = re => /\|/.test(removeGroups(re)) ? '('+re+')' : re  // Wraps in `()` if `|` at root level
  
  for (let i=a.length-1; i; i--) {  // Start with last node, work forward
  
    let self = a[i]
    let loop = self[i] ? (self[i].length>1 ? '('+self[i]+')' : self[i]) + '*' : ''  // Used to form new links below
    let tos = Object.keys(self).filter(k=>k!='id'&&k!=i).map(j=>a[j])  // Find links from self to other nodes
    let froms = a.filter(from => from != self && from[i])  // Find nodes with links to self
    
    froms.forEach(from => {
      tos.forEach(to => {
        let oldLink = a[from.id][to.id]    // Already known
        let newLink = ors(a[from.id][i]) + loop + ors(a[i][to.id])  // Link `from`->`self`; My loop; Link `self`->`to`
        
        a[from.id][to.id] = (oldLink ? oldLink+'|'+newLink : newLink)  // Merge links if old exists
        
      })
      delete a[from.id][i]  // Remove link to node that is about to be removed
    })
    a.splice(-1,1)  // Remove last node 
  }  
  return '^('+a[0][0]+')+$'  // Wrap appropriately
}
