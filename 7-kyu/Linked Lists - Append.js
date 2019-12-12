function Node(data) {
  this.data = data;
  this.next = null;
}

function append(a,b) {
  if(!a)return b;
  a.next=append(a.next,b);
  return a;
}
