## Queue

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

Can be accessed after including  `var queue = new  lib.Queue();` 

#### Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| head     | {Number} | Get the first element into the list | 
| tail     | {Number} | Get the last element into the list  |
| length   | {Number} | Get the size list                   |

#### Functions

| Function   | Parameters | Return    | Description                        |  
|   --       |  --        | --        |  --                                | 
| getHead    |  -         |{Number}   | Get the first element into the list|
| search     | {number}   | {Boolean} | Search a list element              |
| getAtIndex | {number}   | {Boolean} | Get element by index               |
| getLength  | -          | {number}  | Get list size                      |
| getValues  | -          | [Array]   | Get list of values                 |
| isEmpty    |    -       | {boolean} | Checks if the list is empty        |
| enqueue    | {number}   | -         | Add element into the list          |
| dequeue    | -          | -         | Remove the head element            |
