## Linked List

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

#### Functions

| Function   | Parameters | Return    | Description                        |  
|----------  | --         | --        |  --                                | 
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
| Variable | Type | Description |  
|--        |--    | --          |
| head | {Number} | Get the first element into the list | 
| length | {Number} | Get the size list |

#### Functions
| Function | Parameters | Return | Description |  
|--        |  --        |--      |--           | 
| addAtHead | {Number} | - | Add element to linkedList in the head|
| removeAtHead| - | - | Remove the head element |
| removeValue| {number} | - | Remove an element from list |
| reverse | - | - | Get reverse list |
| addAtIndex | {number}, {number} | {number} | Insert an element by index |

____

### Doubly Linked List

#### Variables
| Variable | Type | Description |  
|--        |--    |--           |
| head | {Number} | Get the first element into the list | 
| tail | {Number} | Get the last element into the list |
| length | {Number} | Get the size list |

Can be accessed after including  `var doublyLinkedList  =  new  lib.DoublyLinkedList();` 

#### Functions
| Function | Parameters | Return | Description |  
|--        |--          |--      |--           | 
| addAtHead | {number} | - | Add element into the list |
| addAtTail | {number} | - | Add the value after the current tail |
| removeAtHead | - | - | Remove the head element  |
| removeAtTail | - | - | Remove the tail element |
| removeValue | - | - | Remove an element from list |
| reverse | - | - | Get reverse list |
| addAtIndex | {number}, {number} | - | Insert an element by index |

____

### Circular Linked List

Can be accessed after including  `var circularLinkedList = new  lib.CircularLinkedList();` 

#### Variables
| Variable | Type | Description |  
|--        |--    |--           |
| head | {Number} | Get the first element into the list | 
| tail | {Number} | Get the last element into the list |
| length | {Number} | Get the size list |

#### Functions

| Function | Parameters | Return | Description |  
|--        |--          |--      |--           |
| addAtHead | {number} | - | Add element into the linked |
| addAtTail | {number} | - | Add the value after the current tail |
| removeAtHead | - | - | Remove the head element |
| removeAtTail | - | - | Remove the tail element |
| removeValue | {number} | - | Remove an element from list |
| addAtIndex | {number}, {number} | - | Insert an element by index |
