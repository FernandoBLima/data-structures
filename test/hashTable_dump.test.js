const DumpHashTable = require('../src/DataStructures/HashTable/dump_hashTable');

describe('DumpHashTable', () => {
    const hashTable = new DumpHashTable();
    
    test('should get hashTable empty', (done) => {
        expect(hashTable.getLength()).toBe(0);
        expect(hashTable.isEmpty()).toBe(true);
        expect(hashTable.remove()).toBe();
        expect(hashTable.get('key 1')).toBe(false);
        expect(hashTable.remove('key 1')).toBe();
        done();
    });

    test('should add the first element in Hash Table', (done) => {
        hashTable.insert('key 1', 'First Element');
        expect(hashTable.getLength()).toBe(1);
        expect(hashTable.get('key 1')).toBe('First Element');
        expect(hashTable.isEmpty()).toBe(false);
        done();
    });

    test('should create and delete the new element in Hash Table', (done) => {
        hashTable.insert('key 2', 'Second Element');
        expect(hashTable.getLength()).toBe(2);
        hashTable.remove('key 2');
        expect(hashTable.getLength()).toBe(1);
        done();
    });


});