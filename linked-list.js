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

  // return first node in the list
  head() {
    return this.listHead;
  }

  // return last node in the list
  tail() {
    let tmp = this.listHead; // point tmp to listHead
    while (tmp.nextNode !== null) tmp = tmp.nextNode; // traverse to end
    return tmp; // return last node
  }

  // return node at given index
  at(index) {
    let count = 0;

    let tmp = this.listHead; // point tmp to listHead
    while (count < index) {
      tmp = tmp.nextNode; // traverse
      count++; // increment count
    }

    return tmp;
  }

  // removes last element from the list
  pop() {
    let tmp = this.listHead; // point tmp to listHead
    // traverse to second-to-last el
    while (tmp.nextNode.nextNode !== null) tmp = tmp.nextNode;
    tmp.nextNode = null; // point to null
  }

  // return a string representation of the entire linked list
  // e.g. ( val1 ) -> ( val2 ) -> ( val3 ) -> tmp
  toString() {
    let string = '';

    let tmp = this.listHead; // point tmp to listHead
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `; // add string rep of node to string var
      tmp = tmp.nextNode; // traverse
    }

    string += tmp; // add 'null' to end
    return string;
  }
}

const list = new LinkedList();
list.append('val1');
list.append('val2');
list.append('val3');
list.append('val4');

// console.log(list.size()); // 2
// console.log(list.head()); // Node { value: 'val1', nextNode: { ... } }
// console.log(list.tail()); // Node { value: 'val3', nextNode: null }
// console.log(list.at(1)); // Node { value: 'val2', nextNode: { ... } }
console.log(list.toString()); // ( val1 ) -> ( val2 ) -> ( val3 ) -> ( val4 ) -> tmp
list.pop();

console.log(list.toString()); // ( val1 ) -> ( val2 ) -> ( val3 ) -> tmp
