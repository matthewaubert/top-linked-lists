import LinkedList from './linked-list.js';

const list = new LinkedList();
list.append('val1');
list.append('val2');
list.append('val3');
list.append('val4');

console.log(list.size()); // 4
console.log(list.head()); // Node { value: 'val1', nextNode: { ... } }
console.log(list.tail()); // Node { value: 'val4', nextNode: null }
console.log(list.at(1)); // Node { value: 'val2', nextNode: { ... } }
console.log(list.toString()); // ( val1 ) -> ( val2 ) -> ( val3 ) -> ( val4 ) -> null

list.pop();
console.log(list.contains('val3')); // true
console.log(list.contains('val5')); // false
console.log(list.find('val3')); // 2
console.log(list.find('val5')); // null

console.log(list.toString()); // ( val1 ) -> ( val2 ) -> ( val3 ) -> null

list.insertAt('firstVal', 0);
console.log(list.toString()); // ( firstVal ) -> ( val1 ) -> ( newVal ) -> ( val2 ) -> ( val3 ) -> null
list.insertAt('newVal', 1);
console.log(list.toString()); // ( firstVal ) -> ( newVal ) -> ( val1 ) -> ( val2 ) -> ( val3 ) -> null
list.insertAt('otherNewVal', 2);
console.log(list.toString()); // ( firstVal ) -> ( newVal ) -> ( otherNewVal ) -> ( val1 ) -> ( val2 ) -> ( val3 ) -> null

list.removeAt(2);
console.log(list.toString()); // ( firstVal ) -> ( newVal ) -> ( val1 ) -> ( val2 ) -> ( val3 ) -> null
list.removeAt(1);
console.log(list.toString()); // ( firstVal ) -> ( val1 ) -> ( val2 ) -> ( val3 ) -> null
list.removeAt(0);
console.log(list.toString()); // ( val1 ) -> ( val2 ) -> ( val3 ) -> null

// list.insertAt('notGonnaWork', 10); // Error: index too large
// list.removeAt(10); // Error: index too large