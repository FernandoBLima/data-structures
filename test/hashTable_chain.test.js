const HashTableLinearChain = require('../src/DataStructures/HashTable/chain_hashTable');

describe('HashTable Linear Chain', () => {
    const hashTableLinearChain = new HashTableLinearChain();
    hashTableLinearChain.setArraySize(12);
    hashTableLinearChain.setModValue(12)
    
    test('should get hashTable empty', (done) => {
        expect(hashTableLinearChain.getLength()).toBe(0);
        expect(hashTableLinearChain.isEmpty()).toBe(true);
        expect(hashTableLinearChain.remove()).toBe(false);
        expect(hashTableLinearChain.get()).toBe(null);
        expect(hashTableLinearChain.get(1)).toBe(null);
        expect(hashTableLinearChain.remove(0)).toBe(false);
        done();
    });

    test('should add values in the hash table', (done) => {
        expect(hashTableLinearChain.insert(2));
        expect(hashTableLinearChain.insert(4));
        expect(hashTableLinearChain.insert(12));
        expect(hashTableLinearChain.insert(24));
        expect(hashTableLinearChain.insert(36));
        expect(hashTableLinearChain.insert(31));
        expect(hashTableLinearChain.insert(42));
        expect(hashTableLinearChain.insert(53));
        done();
    });

    test('should get the values from the hash table ', (done) => {
        expect(hashTableLinearChain.get(2)).toBe(2);
        expect(hashTableLinearChain.get(4)).toBe(4);
        expect(hashTableLinearChain.get(12)).toBe(12);
        expect(hashTableLinearChain.get(24)).toBe(24);
        expect(hashTableLinearChain.get(36)).toBe(36);
        expect(hashTableLinearChain.get(31)).toBe(31);
        expect(hashTableLinearChain.get(42)).toBe(42);
        expect(hashTableLinearChain.get(53)).toBe(53);
        expect(hashTableLinearChain.get(48)).toBe(null);
        done();
    });

    test('should remove the values from the hash table', (done) => {
        expect(hashTableLinearChain.remove(48)).toBe(false);
        expect(hashTableLinearChain.remove(2)).toBe(true);
        expect(hashTableLinearChain.remove(4)).toBe(true);
        expect(hashTableLinearChain.remove(12)).toBe(true);
        expect(hashTableLinearChain.remove(24)).toBe(true);
        expect(hashTableLinearChain.remove(36)).toBe(true);
        expect(hashTableLinearChain.remove(31)).toBe(true);
        expect(hashTableLinearChain.remove(42)).toBe(true);
        expect(hashTableLinearChain.remove(53)).toBe(true);
        done();
    });

});