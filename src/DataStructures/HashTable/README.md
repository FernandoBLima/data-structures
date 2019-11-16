## Hash Table

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

#### Variables
| Variable |   Type   | Description                         |  
|    --    |    --    |    --                               |
| list     | {Number} | List of elements                    | 
| length   | {Number} | Get the size list                   |

#### Common functions
| Function     | Parameters | Return    | Description                        |  
|   --         | --         | --        |  --                                | 
| setArraySize | {Number}   | -         | Action to check whether the item exists or not |
| setModValue  | {Number}   | -         | Search a list element              |
| _hash        | {any}      | {Number}  | Should convert a key in an integer |
| getLength    |  -         | {Number } | Get element by index               |
| isEmpty      |  -         | {Boolean} | Get element by index               |
| get          |  -         | {Boolean} | Should get an element               |
| remove       |  -         | {Boolean} | Should remove an element            |
| insert       |  {any}     | {Boolean} | Action to add a new element         |

___


The Dump HashTable can be accessed after including  `var dumpHashTable = new  lib.DumpHashTable();` 

##### Example

```javascript
var hashTableLinearProibing = new lib.HashTableLinearProibing();

hashTableLinearProibing.setArraySize(12);
hashTableLinearProibing.setModValue(12)

hashTableLinearProibing.insert(1);
hashTableLinearProibing.insert(2);
hashTableLinearProibing.get(1);
hashTableLinearProibing.remove(1);
```
____

The HashTable Separate Chaining can be accessed after including  `var hashTableChain = new  lib.HashTableChain();` 

##### Example

```javascript
var hashTableChain = new lib.HashTableChain();

hashTableChain.setArraySize(12);
hashTableChain.setModValue(12)

hashTableChain.insert(1);
hashTableChain.insert(2);
hashTableChain.get(1);
hashTableChain.remove(1);
```
____

The linear proibing can be accessed after including  `var linearProibing = new  lib.HashTableLinearProibing();` 
##### Example

```javascript
var linearProibing = new lib.HashTableLinearProibing();

linearProibing.setArraySize(12);
linearProibing.setModValue(12)

linearProibing.insert(1);
linearProibing.insert(2);
linearProibing.get(1);
linearProibing.remove(1);
```
____


The quadratic proibing can be accessed after including  `var quadraticProibing = new  lib.HashTableQuadraticProibing();` 
##### Example

```javascript
var quadraticProibing = new lib.HashTableQuadraticProibing();

quadraticProibing.setArraySize(12);
quadraticProibing.setModValue(12)

quadraticProibing.insert(1);
quadraticProibing.insert(2);
quadraticProibing.get(1);
quadraticProibing.remove(1);
```
____


