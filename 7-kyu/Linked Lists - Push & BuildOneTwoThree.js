function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  let newNode = new Node(data)
  newNode.next = head
  return newNode
}

function buildOneTwoThree() {
  let myList = null
  myList = push(myList, 3)
  myList = push(myList, 2)
  myList = push(myList, 1)
  return myList
}

//clever stuff
var push = (head, data) => new Node(data, head);

var build = (...args) => args.reduce(push, null);

var buildOneTwoThree = build.bind(null, 3, 2, 1);

var Node = (data, next = null) => ( {data, next} );
