# Set and MultiSet

## Set
Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

Can be accessed after including  `var set = new  lib.Set();` 

#### Variables
| Variable       |   Type   | Description                         |  
|    --          |    --    |    --                               |
| listValues     | {Array } | Get the list of element             | 
| capacity       | {Number} | Get number of items in list         |

#### Functions

| Function              | Parameters     | Return         | Description                        |  
|   --                  |  --            | --             |  --                                | 
| union                 | {SetStructure} | {SetStructure} | returns a new set which contains all the elements of set s and all the elements of set t, and no others|
| intersect             | {SetStructure} | {SetStructure} | eturns a new set which contains all and only those elements in both s and t              |
| disjointSets          | {SetStructure} | {SetStructure} |                |
| difference            | {SetStructure} | {SetStructure} | returns a new set which contains all and only those elements in s but not in t |
| symmetricDifference   | {SetStructure} | {SetStructure} | returns a symmetrical set          |
| createFrom            |    -           | {SetStructure} | Checks if the list is empty        |
| insert                | {number}       | -              | add element e to the set s         |
| remove                | {number}       | -              | remove element e from the set s    |
| contains              | {number}       | {Boolean}      | returns whether e is a member of s |
| getAllSubsets         | -              | {array}        | returns all the subsets that the set has |
| insertAll             | {SetStructure} | -              | adds all the elements of set t to set s  |
| removeAll             | {SetStructure} | -              | removes all the elements of t from s  |
| isSubset              | {SetStructure} | {Boolean}      | returns if the set is a Subset of the set T.         |
| isProperSubset        | {SetStructure} | {Boolean}      | returns if the set is a Proper Subset of the set T.        |
| getCapacity           | -              | {number}       | returns the number of elements in s |
| isEmpty               | -              | {Boolean}      | returns whether there are no elements in s |
| cleanSet              | -              | -              | clear the set list          |
| getAllValues          | -              | -              | return all the elements of the list     |


##### Basic Example

```javascript
var set1 = new lib.Set();
set1.insert(1);
set1.insert(2);
set1.insert(4);

var set2 = new lib.Set();
set2.insert(1);
set2.insert(2);
set2.insert(3);

var set3 = set1.difference(set2); // 4
var set4 = set1.union(set2); // 1,2,3,4
var set5 = set1.intersect(set2); // 1,2

set1.isSubset(set2); // false

set3.getCapacity(); // 1
set3.getAllValues(); // 4
set3.cleanSet();
```
____

## Multiset

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

Can be accessed after including  `var multiSet = new  lib.MultiSets();` 

#### Variables
| Variable       |   Type   | Description                         |  
|    --          |    --    |    --                               |
| items          | {Array } | Get the list of element             | 
| cardinality    | {Number} | Get number of items in list         |

#### Functions

| Function              | Parameters     | Return         | Description                        |  
|   --                  |  --            | --             |  --                                | 
| union                 | {SetStructure} | {SetStructure} | returns a new multiset which contains all the elements of set s and all the elements of set t, and no others|
| intersect             | {SetStructure} | {SetStructure} | eturns a new set which contains all and only those elements in both s and t              |
| disjointSets          | {SetStructure} | {SetStructure} |                |
| difference            | {SetStructure} | {SetStructure} | returns a new set which contains all and only those elements in s but not in t |
| symmetricDifference   | {SetStructure} | {SetStructure} | returns a symmetrical set          |
| createFrom            |    -           | {SetStructure} | Checks if the list is empty        |
| insert                | {number}       | -              | add element e to the set s         |
| remove                | {number}       | -              | remove element e from the set s    |
| contains              | {number}       | {Boolean}      | returns whether e is a member of s |
| getAllSubsets         | -              | {array}        | returns all the subsets that the set has |
| insertAll             | {SetStructure} | -              | adds all the elements of set t to set s  |
| removeAll             | {SetStructure} | -              | removes all the elements of t from s  |
| isSubset              | {SetStructure} | {Boolean}      | returns if the set is a Subset of the set T.            |
| isProperSubset        | {SetStructure} | {Boolean}      | returns if the set is a Proper Subset of the set T.         |
| getCapacity           | -              | {number}       | returns the number of elements in s |
| isEmpty               | -              | {Boolean}      | returns whether there are no elements in s |
| clear                 | -              | -              | clear the set list           |


##### Basic Example
```javascript
const multiSets3 = new lib.MultiSets();
multiSets3.setItem('1', 1);
multiSets3.setItem('2', 2);


const multiSets4 = new lib.MultiSets();
multiSets4.setItem('2', 2);
multiSets4.setItem('3', 1);

multiSets3.union(multiSets4) // MultiSets { items: { ' 1': 1, ' 2': 2, ' 3': 1 }, cardinality: 4 }
multiSets3.difference(multiSets4) // MultiSets { items: { ' 1': 1 }, cardinality: 0 }
multiSets3.sum(multiSets4) // MultiSets { items: { ' 1': 1, ' 2': 4, ' 3': 1 }, cardinality: 1 }
multiSets3.intersect(multiSets4) // MultiSets { items: { ' 2': 2 }, cardinality: 0 }
multiSets3.disjointSets(multiSets4) // false
multiSets3.isSubset(multiSets4) // false
multiSets3.isProperSubset(multiSets4) // true
multiSets3.isEmpty() // false
multiSets3.hasValue(2) // true
multiSets3.getCardinality() // 2
multiSets3.getCardinality(2) // 2
```