import Node from './node.js';

// create a new linked list
// with appropriate functionality on prototype
export default class LinkedList {
  constructor(head = null) {
    this.head = head; // pointer to start of linked list
  }

  // traverse to end of list
  // #traverse() {
  //   let tmp = this.head;
  //   while (tmp.nextNode !== null) tmp = tmp.nextNode;
  //   return tmp;
  // }

  // add a new value to the end of the linked list
  append(value) {
    if (this.head === null) {
      this.prepend(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;

      tmp.nextNode = new Node(value);
    }
  }

  // add a new value at the start of the linked list
  prepend(value) {
    // create a new head and point it to current head
    const newHead = new Node(value, this.head);
    this.head = newHead; // set new head to be the head
  }

  toString() {
    let string = '';

    let tmp = this.head;
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }

    string += 'tmp';
    return string;
  }
}

const list = new LinkedList();
list.append('val1');
list.append('val2');
console.log(list.toString());
