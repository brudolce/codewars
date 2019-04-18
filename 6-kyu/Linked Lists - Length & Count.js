function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let i = 0;
  while (head) {
    head = head.next;
    i++;
  }
  return i;
}

function count(head, data) {
  let count = 0;
  while (head) {
    if (data === head.data) {
      count += 1;
    }
    head = head.next;
  }
  return count;
}

//clever solution
function Node(data) {
  this.data = data
  this.next = null
}

function length(head) {
  return head ? 1 + length(head.next) : 0
}

function count(head, data) {
  if (!head) return 0
  return (head.data === data ? 1 : 0) + count(head.next, data)
}
