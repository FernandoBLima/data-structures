const HashTableQuadraticProibing = require('../src/DataStructures/HashTable/quadratic_proibing_hashtable');

describe('HashTable Quadratic Proibing', () => {
    const hashTableQuadraticProibing = new HashTableQuadraticProibing();
    hashTableQuadraticProibing.setArraySize(12);
    hashTableQuadraticProibing.setModValue(12);

    test('should get hashTable empty', (done) => {
        expect(hashTableQuadraticProibing.getLength()).toBe(0);
        expect(hashTableQuadraticProibing.isEmpty()).toBe(true);
        expect(hashTableQuadraticProibing.remove()).toBe(false);
        expect(hashTableQuadraticProibing.get()).toBe(false);
        expect(hashTableQuadraticProibing.get(1)).toBe(false);
        expect(hashTableQuadraticProibing.remove(1)).toBe(false);
        done();
    });

    test('should add values', (done) => {
        expect(hashTableQuadraticProibing.insert(2));
        expect(hashTableQuadraticProibing.insert(12));
        expect(hashTableQuadraticProibing.insert(24));
        expect(hashTableQuadraticProibing.insert(36));
        expect(hashTableQuadraticProibing.insert(11));
        expect(hashTableQuadraticProibing.insert(22));
        expect(hashTableQuadraticProibing.insert(33));

        expect(hashTableQuadraticProibing.insert(24));
        expect(hashTableQuadraticProibing.insert(25));
        expect(hashTableQuadraticProibing.insert(26));
        expect(hashTableQuadraticProibing.insert(27));
        expect(hashTableQuadraticProibing.insert(28));

        expect(hashTableQuadraticProibing.insert(13)).toBe('Error! Array size exceeds');

        done();
    });

    test('should get values from hash table', (done) => {
        expect(hashTableQuadraticProibing.get(2)).toBe(2);
        expect(hashTableQuadraticProibing.get(12)).toBe(12);
        expect(hashTableQuadraticProibing.get(24)).toBe(24);
        expect(hashTableQuadraticProibing.get(36)).toBe(36);
        expect(hashTableQuadraticProibing.get(11)).toBe(11);
        expect(hashTableQuadraticProibing.get(22)).toBe(22);
        expect(hashTableQuadraticProibing.get(33)).toBe(33);
        expect(hashTableQuadraticProibing.get(24)).toBe(24);
        expect(hashTableQuadraticProibing.get(25)).toBe(25);
        expect(hashTableQuadraticProibing.get(26)).toBe(26);
        expect(hashTableQuadraticProibing.get(27)).toBe(27);
        expect(hashTableQuadraticProibing.get(28)).toBe(28);
        expect(hashTableQuadraticProibing.get(55)).toBe(false);
        done();
    });


    test('should remove values from the hash table', (done) => {
        expect(hashTableQuadraticProibing.remove(2)).toBe(true);
        expect(hashTableQuadraticProibing.remove(12)).toBe(true);
        expect(hashTableQuadraticProibing.remove(24)).toBe(true);
        expect(hashTableQuadraticProibing.remove(36)).toBe(true);
        expect(hashTableQuadraticProibing.remove(11)).toBe(true);
        expect(hashTableQuadraticProibing.remove(22)).toBe(true);
        expect(hashTableQuadraticProibing.remove(33)).toBe(true);
        expect(hashTableQuadraticProibing.remove(55)).toBe(false);
        expect(hashTableQuadraticProibing.remove(24)).toBe(false);
        expect(hashTableQuadraticProibing.remove(25)).toBe(true);
        expect(hashTableQuadraticProibing.remove(26)).toBe(true);
        expect(hashTableQuadraticProibing.remove(27)).toBe(true);
        expect(hashTableQuadraticProibing.remove(28)).toBe(true);
        expect(hashTableQuadraticProibing.getLength()).toBe(0);
        done();
    });


});