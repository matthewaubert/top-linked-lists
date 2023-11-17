// create a new node in a linked list
// with a value and a pointer to the next node
export default class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode; // pointer to next node in linked list
  }
}
