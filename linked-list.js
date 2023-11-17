import Node from './node.js';

// create a new linked list
// with appropriate functionality on prototype
export default class LinkedList {
  constructor(listHead = null) {
    this.listHead = listHead; // pointer to start of linked list
  }

  // traverse to end of list
  // #traverse() {
  //   let tmp = this.listHead;
  //   while (tmp.nextNode !== null) tmp = tmp.nextNode;
  //   return tmp;
  // }

  // add a new value at the start of the linked list
  prepend(value) {
    // create a new listHead and point it to current listHead
    const newListHead = new Node(value, this.listHead);
    this.listHead = newListHead; // set new listHead to be the listHead
  }

  // add a new value to the end of the linked list
  append(value) {
    // if no values yet, prepend value
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let tmp = this.listHead; // point tmp to listHead
      while (tmp.nextNode !== null) tmp = tmp.nextNode; // traverse to end

      tmp.nextNode = new Node(value); // add new node to end
    }
  }

  // return num of nodes in list
  size() {
    let count = 0;

    let tmp = this.listHead; // point tmp to listHead
    // traverse to end of list, counting each time
    while (tmp !== null) {
      count++;
      tmp = tmp.nextNode;
    }

    return count;
  }

  head() {
    return this.listHead.value;
  }

  toString() {
    let string = '';

    let tmp = this.listHead;
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }

    string += tmp;
    return string;
  }
}

const list = new LinkedList();
list.append('val1');
list.append('val2');
console.log(list.size()); // 2
console.log(list.head()); // val1

console.log(list.toString()); // ( val1 ) -> ( val2 ) -> tmp
