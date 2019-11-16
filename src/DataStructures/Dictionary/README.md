## Dictionary

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const lib  =  require('./data-structure');`.

Can be accessed after including  `var dictionary = new  lib.Dictionary();` 

#### Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| items    | {Number} | List of elements in array           | 
| size     | {Number} | Get the size list                   |

#### Functions

| Function     | Parameters | Return    | Description                        |  
|   --         | --         | --        |  --                                | 
| hasItem      |  {String}  | {Boolean} | Action to check whether the item exists or not |
| setItem      | {number}   | -         | Insert an item in the list              |
| getItem      | {number}   | {Number}  | Return an item if it exist              |
| getValues    | -          | {Array}   | Return all the values from the list     |
| getKeys      | -          | {Array}   | Return all the keys from the list       |
| deleteItem   | -          | {Boolean} | Delete an item from the list            |
| containKey   | -          | {Boolean} | Return boolean if the list contains a key      |
| containValue | -          | {Boolean} | Return boolean if the list contains a value    |
| sort         | -          | {Array}   | Sort the entire list by the keys               |
| isEmpty      |    -       | {boolean} | Check if the list is empty or not              |
| getSize      |    -       | {Number}  | Return the size of the list             |
| clear        |    -       | -         | Clear list of elements                  |

##### Example

```javascript
var dictionary = new lib.Dictionary();

dictionary.setItem('key 1', 1);
dictionary.setItem('key 2', 2);
dictionary.setItem('key 3', 3);
dictionary.getSize(); // 3
dictionary.hasItem('key 1'); // true
dictionary.getItem('key 3'); // 3
dictionary.getKeys(); // [key 1, key 2, key 3]
dictionary.getValues(); // [1, 2, 3]
dictionary.deleteItem('key 1') // true
```
____