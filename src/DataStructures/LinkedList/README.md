## Linked List

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

#### Functions

| Function   | Parameters | Return    | Description                        |  
|   --       | --         | --        |  --                                | 
| getHead    |  -         |{Number}   | Get the first element into the list|
| search     | {number}   | {Boolean} | Search a list element              |
| getAtIndex | {number}   | {Boolean} | Get element by index               |
| getLength  | -          | {number}  | Get list size                      |
| getValues  | -          | [Array]   | Get list of values                 |
| isEmpty    |    -       | {boolean} | Checks if the list is empty        |

 
## Extentions

### Singly Linked List
 
Can be accessed after including  `var  linkedList  =  new  lib.LinkedList();` 

#### Variables
|   Variabl  | Type     | Description                         |  
|   --       |  --      | --                                  |
|   head     | {Number} | Get the first element into the list | 
|   length   | {Number} | Get the size list                   |

#### Functions
| Function     | Parameters         |   Return  |   Description                                         |  
|   --         |  --                |   --      | --                                                    | 
| addAtHead    | {Number}           |   -       | Add element to linkedList in the head                 |
| removeAtHead | -                  |  -        | Remove the head element                               |
| removeValue  |  {number}          |   -       | Remove an element from list                           |
| reverse      | -                  | -         | Used to reverse the order of the elements in the List |
| addAtIndex   | {number}, {number} | {number}  | Insert an element by index                            |

##### Example

```javascript
var singlyLinkedList = new lib.SinglyLinkedList();

singlyLinkedList.addAtHead(1)
singlyLinkedList.addAtHead(2)
singlyLinkedList.addAtHead(3) 
singlyLinkedList.addAtHead(4) 
singlyLinkedList.addAtHead(5) 
singlyLinkedList.search(1)) // true
singlyLinkedList.search(11)) // false
singlyLinkedList.getValues() // 5,4,3,2,1
singlyLinkedList.addAtIndex(111,2) // 5,11,4,3,2,1
singlyLinkedList.removeValue(4) // true
singlyLinkedList.removeValue(11) // false
```

____

### Doubly Linked List

#### Variables
| Variable  | Type      | Description                         |  
|--         |--         |--                                   |
| head      | {Number}  | Get the first element into the list | 
| tail      | {Number}  | Get the last element into the list  |
| length    | {Number}  | Get the size list                   |

Can be accessed after including  `var doublyLinkedList  =  new  lib.DoublyLinkedList();` 

#### Functions
| Function      | Parameters         | Return   | Description                           |  
|--             |--                  |--        |--                                     | 
| addAtHead     | {number}           | -        | Add element into the list             |
| addAtTail     | {number}           | -        | Add the value after the current tail  |
| removeAtHead  | -                  | -        | Remove the head element               |
| removeAtTail  | -                  | -        | Remove the tail element               |
| removeValue   | -                  | -        | Remove an element from list           |
| reverse       | -                  | -        | Used to reverse the order of the elements in the List |
| addAtIndex    | {number}, {number} | -        | Insert an element by index            |

##### Example

```javascript
var doublyLinkedList = new lib.DoublyLinkedList();

doublyLinkedList.addAtHead(3) 
doublyLinkedList.addAtHead(6) 
doublyLinkedList.addAtTail(55) 
doublyLinkedList.addAtIndex(66, 5);
doublyLinkedList.addAtIndex(77, 6)
doublyLinkedList.addAtIndex(99, 6)
doublyLinkedList.getValues() // [ 6, 3, 66, 77, 99, 55 ]
doublyLinkedList.removeAtTail()
doublyLinkedList.getValues() // [ 6, 3, 66, 77, 99 ]
doublyLinkedList.removeValue(2) // false
doublyLinkedList.removeValue(66) // true
doublyLinkedList.getValues() // [ 6, 3, 77, 99 ]
doublyLinkedList.search(1) // false
doublyLinkedList.search(3) // true
doublyLinkedList.reverse() 
doublyLinkedList.getValues() // [99,77,3,6]
```

____

### Circular Linked List

Can be accessed after including  `var circularLinkedList = new  lib.CircularLinkedList();` 

#### Variables
| Variable | Type     | Description                           |  
|    --    |--        |--                                     |
| head     | {Number} | Get the first element into the list   | 
| tail     | {Number} | Get the last element into the list    |
| length   | {Number} | Get the size list                     |

#### Functions

| Function      | Parameters         | Return | Description                          |  
|--             |--                  |--      |--                                    |
| addAtHead     | {number}           | -      | Add element into the linked          |
| addAtTail     | {number}           | -      | Add the value after the current tail |
| removeAtHead  | -                  | -      | Remove the head element              |
| removeAtTail  | -                  | -      | Remove the tail element              |
| removeValue   | {number}           | -      | Remove an element from list          |
| addAtIndex    | {number}, {number} | -      | Insert an element by index           |

##### Example

```javascript
var circularLinkedList = new lib.CircularLinkedList();

circularLinkedList.addAtHead(3);
circularLinkedList.addAtHead(6); // 6 - 3
circularLinkedList.addAtHead(4); // 4 - 6 - 3
circularLinkedList.addAtHead(44); // 44 - 4 - 6 - 3
circularLinkedList.addAtHead(24); // 24 - 44 - 4 - 6 - 3
circularLinkedList.addAtHead(84); // 84 - 24 - 44 - 4 - 6 - 3
circularLinkedList.addAtTail(21); // 84 - 24 - 44 - 4 - 6 - 3 - 21
circularLinkedList.addAtIndex(1,1); // 84 - 1 - 24 - 44 - 4 - 6 - 3 - 21
circularLinkedList.removeValue(3) // true
circularLinkedList.removeValue(453) // false
circularLinkedList.getValues() // 84 - 1 - 24 - 44 - 4 - 6 - 21
circularLinkedList.search(24) // true
circularLinkedList.search(45) // false
circularLinkedList.getAtIndex(2) // 24
circularLinkedList.removeAtTail();
circularLinkedList.getValues() // 84 - 1 - 24 - 44 - 4 - 6
```