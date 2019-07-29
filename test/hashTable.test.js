const HashTable = require('../src/DataStructures/HashTable/hashTable');

describe('HashTable', () => {
    const hashTable = new HashTable();
    
    test('should get hashTable empty', (done) => {
        expect(hashTable.getLength()).toBe(0);
        expect(hashTable.isEmpty()).toBe(true);
        expect(hashTable.remove()).toBe();
        expect(hashTable.get('key 1')).toBe(false);
        expect(hashTable.remove('key 1')).toBe();
        done();
    });

    test('should add the first element in Hash Table', () => {
        hashTable.insert('First Element', 'key 1');
        expect(hashTable.getLength()).toBe(1);
        expect(hashTable.get('key 1')).toBe('First Element');
        expect(hashTable.isEmpty()).toBe(false);
    });

    test('should create and delete the new element in Hash Table', () => {
        hashTable.insert('Second Element', 'key 2');
        expect(hashTable.getLength()).toBe(2);
        hashTable.remove('key 2');
        expect(hashTable.getLength()).toBe(1);
    });


});