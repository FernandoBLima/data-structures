const HashTableLinearProibing = require('../src/DataStructures/HashTable/linear_proibing_hashTable');

describe('HashTable Linear Proibing', () => {
    const hashTableLinearProibing = new HashTableLinearProibing();
    hashTableLinearProibing.setArraySize(12);
    hashTableLinearProibing.setModValue(12);

    test('should get hashTable empty', (done) => {
        expect(hashTableLinearProibing.getLength()).toBe(0);
        expect(hashTableLinearProibing.isEmpty()).toBe(true);
        expect(hashTableLinearProibing.remove()).toBe(false);
        expect(hashTableLinearProibing.get()).toBe(false);
        expect(hashTableLinearProibing.get(1)).toBe(false);
        expect(hashTableLinearProibing.remove(1)).toBe(false);
        done();
    });

    test('should add the first element in Hash Table', (done) => {
        hashTableLinearProibing.insert('First Element');
        expect(hashTableLinearProibing.getLength()).toBe(1);
        expect(hashTableLinearProibing.get('First Element')).toBe('First Element');
        expect(hashTableLinearProibing.isEmpty()).toBe(false);
        done();
    });

    test('should create and delete the new element in Hash Table', (done) => {
        hashTableLinearProibing.insert('Second Element');
        expect(hashTableLinearProibing.getLength()).toBe(2);
        hashTableLinearProibing.remove('Second Element');
        expect(hashTableLinearProibing.getLength()).toBe(1);
        hashTableLinearProibing.remove('First Element');
        expect(hashTableLinearProibing.getLength()).toBe(0);
        done();
    });


    test('should add values in the array', (done) => {
        expect(hashTableLinearProibing.insert(1));
        expect(hashTableLinearProibing.insert(12));
        expect(hashTableLinearProibing.insert(24));
        expect(hashTableLinearProibing.insert(36));
        expect(hashTableLinearProibing.insert(4));
        expect(hashTableLinearProibing.insert(5));
        expect(hashTableLinearProibing.insert(6));
        expect(hashTableLinearProibing.insert(7));
        expect(hashTableLinearProibing.insert(8));
        expect(hashTableLinearProibing.insert(9));
        expect(hashTableLinearProibing.insert(10));
        expect(hashTableLinearProibing.insert(11));
        expect(hashTableLinearProibing.insert(13)).toBe('Error! Array size exceeds');
        expect(hashTableLinearProibing.getLength()).toBe(12);
        done();
    });

    test('should get values in the array', (done) => {
        expect(hashTableLinearProibing.get(1)).toBe(1);
        expect(hashTableLinearProibing.get(12)).toBe(12);
        expect(hashTableLinearProibing.get(24)).toBe(24);
        expect(hashTableLinearProibing.get(36)).toBe(36);
        expect(hashTableLinearProibing.get(48)).toBe(false);
        expect(hashTableLinearProibing.get(108)).toBe(false);
        expect(hashTableLinearProibing.get(4)).toBe(4);
        expect(hashTableLinearProibing.get(5)).toBe(5);
        expect(hashTableLinearProibing.get(6)).toBe(6);
        expect(hashTableLinearProibing.get(7)).toBe(7);
        expect(hashTableLinearProibing.get(8)).toBe(8);
        expect(hashTableLinearProibing.get(9)).toBe(9);
        expect(hashTableLinearProibing.get(10)).toBe(10);
        expect(hashTableLinearProibing.get(13)).toBe(false);
        expect(hashTableLinearProibing.getLength()).toBe(12);
        done();
    });

    test('should remove values in the array', (done) => {
        expect(hashTableLinearProibing.remove(1)).toBe(true);
        expect(hashTableLinearProibing.remove(12)).toBe(true);
        expect(hashTableLinearProibing.remove(24)).toBe(true);
        expect(hashTableLinearProibing.remove(24)).toBe(false);
        expect(hashTableLinearProibing.remove(36)).toBe(true);
        expect(hashTableLinearProibing.remove(4)).toBe(true);
        expect(hashTableLinearProibing.remove(5)).toBe(true);
        expect(hashTableLinearProibing.remove(6)).toBe(true);
        expect(hashTableLinearProibing.remove(7)).toBe(true);
        expect(hashTableLinearProibing.remove(8)).toBe(true);
        expect(hashTableLinearProibing.remove(9)).toBe(true);
        expect(hashTableLinearProibing.remove(10)).toBe(true);
        expect(hashTableLinearProibing.remove(11)).toBe(true);
        expect(hashTableLinearProibing.remove(333)).toBe(false);
        expect(hashTableLinearProibing.getLength()).toBe(0);
        done();
    });

});