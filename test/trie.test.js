
const Trie = require('../src/DataStructures/Trie/trie');

describe('Trie', () => {
    const trie = new Trie();
    
    test('should get trie empty', (done) => {
        expect(trie.getLength()).toBe(0);
        expect(trie.getLength()).toBe(0);
        expect(trie.isEmpty()).toBe(true);
        expect(trie.clear()).toBe();
        done();
    });

    test('should create the first element in trie and then remove', () => {
        trie.insert('a');
        expect(trie.getLength()).toBe(1);
        expect(trie.isEmpty()).toBe(false);
        expect(trie.remove('a')).toBe(true);
    });

    test('should create the first element in trie', () => {
        expect(trie.insert('abc')).toBe();
        expect(trie.getLength()).toBe(3);
        expect(trie.isEmpty()).toBe(false);
    });

    test('should add one letter and delete the new element in trie', () => {
        const trie = new Trie();
        trie.insert('aba');
        expect(trie.getLength()).toBe(3);
        trie.remove('aba');
        expect(trie.getLength()).toBe(0);
    });

    test('should not remove a world that do not exist in trie', () => {
        trie.remove('aba');
        expect(trie.remove('abaa')).toBe(false);
    });

    test('should add 2 new words by recursive method', () => {
        trie.insertRecursive('abb');
        trie.insertRecursive('abd');
    });

    test('should create 4 new words', () => {
        trie.insert('abe');
        trie.insert('abf');
        trie.insert('acfg');
        expect(trie.getLength()).toBe(10);
        expect(trie.isEmpty()).toBe(false);
    });

    test('should find the word', () => {
        expect(trie.search('abb')).toBe(true);
    });

    test('should not find the word', () => {
        expect(trie.search('abh')).toBe(false);
        expect(trie.search('a')).toBe(false);
        expect(trie.search('aes')).toBe(false);

    });

    test('should display all suggestions', () => {
        expect(trie.suggestionWord('a')).toEqual(['abc','abb', 'abd', 'abe', 'abf', 'acfg' ]);
    });

    test('should not display suggestions from a word that do not exist', () => {
        expect(trie.suggestionWord('abbb')).toEqual([]);
    });


});