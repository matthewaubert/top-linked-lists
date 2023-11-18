import Node from './node.js';

// create a new linked list
// with appropriate functionality on prototype
export default class LinkedList {
  constructor(listHead = null) {
    this.listHead = listHead; // pointer to start of linked list
  }

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
      if (tmp === null) return null; // edge case: index too large
      count++;
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

  // return boolean value whether passed-in value is in list
  contains(value) {
    let tmp = this.listHead; // point tmp to listHead
    while (tmp !== null) {
      // if tmp value equals passed-in value, return true
      if (tmp.value === value) return true;
      tmp = tmp.nextNode; // traverse
    }

    return false;
  }

  // return index of node containing value
  // return null if value not found
  find(value) {
    let count = 0;

    let tmp = this.listHead; // point tmp to listHead
    // while tmp isn't null
    while (tmp !== null) {
      // if tmp value equals passed-in value, return count
      if (tmp.value === value) return count;
      count++;
      tmp = tmp.nextNode; // traverse
    }

    return null;
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

  // insert a new node with the provided value at given index
  insertAt(value, index) {
    if (index === 0) this.prepend(value); // if index is 0, prepend
    let count = 0;

    let tmp = this.listHead; // point tmp to listHead
    while (count < index - 1) {
      tmp = tmp.nextNode; // traverse
      count++;
    }

    // create new node pointing to tmp.nextNode
    const newNode = new Node(value, tmp.nextNode);
    // if index is 1, point listHead to new node; else, point tmp to new node
    index === 1 ? (this.listHead.nextNode = newNode) : (tmp.nextNode = newNode);
  }

  // remove node at given index
  removeAt(index) {
    let count = 0;

    let tmp = this.listHead; // point tmp to listHead
    while (count < index - 1) {
      tmp = tmp.nextNode; // traverse
      count++;
    }

    // if index is 1, point listHead to listHead.nextNode.nextNode;
    // else point tmp to tmp.nextNode.nextNode
    index === 1
      ? (this.listHead.nextNode = this.listHead.nextNode.nextNode)
      : (tmp.nextNode = tmp.nextNode.nextNode);
  }
}
