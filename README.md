# Linked Lists

This repo was made as part of <a href="https://www.theodinproject.com/lessons/javascript-linked-lists">The Odin Project: JavaScript course</a> in order to practice what I've learned about data structures and algorithms, particularly linked lists.

## Assignment

I will need to build two classes or factories:

1. `LinkedList` class/factory, which will represent the full list
1. `Node` class/factory, containing a `value` property and a link to the `nextNode`, both set to `null` by default

I will need to build the following functions in my LinkedList class/factory:

1. `append(value)` adds a new node containing `value` to the end of the list
1. `prepend(value)` adds a new node containing `value` to the start of the list
1. `size()` returns the total number of nodes in the list
1. `head()` returns the first note in the list
1. `tail()` returns the last notes in the list
1. `at(index)` returns the node at the given `index`
1. `pop()` removed the last element from the list
1. `contains(value)` returns true if the passed in value is in the list and otherwise returns false
1. `find(value)` returns the index of the node containing value, or null if not found
1. `toString()` represents a LinkedList instance as a string, so it can be printed out and previewed in the console. Format: `( value ) -> ( value ) -> ( value ) -> null`

## Extra Credit
1. `insertAt(value, index)` inserts a new node with the provided `value` at the given `index`
1. `removeAt(index)` removes the node at the given `index`