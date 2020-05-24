## Trie

Global data-struture object can be accessed after including `data-structure.js` in script tag or through `const  lib  =  require('./data-structure');`.

Can be accessed after including  `var trie = new  lib.Trie();` 

#### Variables
| Variable |   Type     | Description                         |  
|    --    |    --      |    --                               |
| root     | {TrieNode} | Get the root element                | 
| length   | {Number}   | Get the size list                   |

#### Functions

| Function         | Parameters          | Return     | Description                        |  
|   --             |  --                 | --         |  --                                | 
| insert           | {string}            | -          | Function to insert the string      |
| insertRecursive  | {string}            | -          | Function to insert the string recursively  |
| search           | {string}            | { Number}  | Returns the string if it exists       |
| isEmpty          | -                   | {boolean}  | Checks whether the list is empty or not |
| getLength        | -                   | {Number }  | Return the length structure |
| remove           | -                   | {Number }  | Remove the string if it exists |
| suggestionWord   | {string}            | [{strings}]| Return a list of suggestion words |


##### Example

```javascript
var trie = new lib.Trie();
trie.insert('abc');
trie.insert('abb');
trie.insert('ac');
trie.insertRecursive('acd');
trie.insertRecursive('ace');
trie.insertRecursive('acef');
trie.insertRecursive('acf');
trie.insertRecursive('acfg');
trie.insertRecursive('acfgggg');
trie.remove('acfgggg') // true
trie.suggestionWord(''); // ['abc', 'abb', 'ac', 'acd', 'ace', 'acef' ]
trie.getLength(); // 6
```
____

