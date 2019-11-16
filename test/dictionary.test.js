

    const Dictionary = require('../src/DataStructures/Dictionary/dictionary');

    describe('Dictionary', () => {
        const dictionary = new Dictionary();
        
        test('should get dictionary empty', (done) => {
            expect(dictionary.getSize()).toBe(0);
            expect(dictionary.isEmpty()).toBe(true);
            expect(dictionary.containValue(1)).toBe(false);
            expect(dictionary.containKey('key 1')).toBe(false);
            expect(dictionary.getItem('key 1')).toBe(null);
            done();
        });

        test('should create the first element in dictionary', () => {
            dictionary.setItem('key 1', 1);
            expect(dictionary.isEmpty()).toBe(false);
            expect(dictionary.containValue(1)).toBe(true);
            expect(dictionary.containKey('key 1')).toBe(true);
            expect(dictionary.getSize()).toBe(1);
        });

        test('should create and delete the new element in dictionary', () => {
            dictionary.setItem('key 2', 2);
            expect(dictionary.getSize()).toBe(2);
            expect(dictionary.containValue(2)).toBe(true);
            expect(dictionary.containKey('key 2')).toBe(true);
            dictionary.deleteItem('key 2');
            expect(dictionary.getSize()).toBe(1);
        });

        test('should create 4 new elements', () => {
            dictionary.setItem('key 6', 6);
            dictionary.setItem('key 5', 5);
            dictionary.setItem('key 4', 4);
            dictionary.setItem('key 3', 3);
            expect(dictionary.getSize()).toBe(5);
        });

        test('should return false to an item that not exist', () => {
            expect(dictionary.hasItem('key 13')).toBe(false);
        });

        test('should get the second element', () => {
            expect(dictionary.hasItem('key 6')).toBe(true);
            expect(dictionary.getItem('key 6')).toBe(6);
        });

        test('should get all keys', () => {
            expect(dictionary.getKeys()).toEqual(['key 1','key 6', 'key 5', 'key 4', 'key 3']);
        });

        test('should get all values', () => {
            expect(dictionary.getValues()).toEqual([ 1, 6, 5, 4, 3 ]);
        });

        test('should get sorted list', () => {
            expect(dictionary.sort()).toEqual([ 'key 1 : 1', 'key 3 : 3', 'key 4 : 4', 'key 5 : 5', 'key 6 : 6' ]);
        });

        test('should delete an item', () => {
            expect(dictionary.deleteItem('key 1')).toBe(true);
        });

        test('should not delete an item that not exist', () => {
            expect(dictionary.deleteItem('key 13')).toBe(false);
        });

        test('should not delete an item that not exist', () => {
            expect(dictionary.clear()).toBe();
        });

    });