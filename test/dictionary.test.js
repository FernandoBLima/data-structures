
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

    const Dictionary = require('../DataStructures/Dictionary/dictionary');

    describe('Dictionary', () => {
        const dictionary = new Dictionary();
        
        it('should get dictionary empty', () => {
            expect(dictionary.getSize()).to.be.equal(0);
        });

        it('should create the first element in dictionary', () => {
            dictionary.setItem('key 1', 1);
            expect(dictionary.getSize()).to.be.equal(1);
        });

        it('should create and delete the new element in dictionary', () => {
            dictionary.setItem('key 2', 2);
            expect(dictionary.getSize()).to.be.equal(2);
            dictionary.deleteItem('key 2');
            expect(dictionary.getSize()).to.be.equal(1);
        });

        it('should create 4 new elements', () => {
            dictionary.setItem('key 6', 6);
            dictionary.setItem('key 5', 5);
            dictionary.setItem('key 4', 4);
            dictionary.setItem('key 3', 3);
            expect(dictionary.getSize()).to.be.equal(5);
        });

        it('should get the second element', () => {
            expect(dictionary.hasItem('key 6')).to.be.equal(true);
            expect(dictionary.getItem('key 6')).to.be.equal(6);
        });

        it('should get all keys', () => {
            expect(dictionary.getKeys()).to.eql(['key 1','key 6', 'key 5', 'key 4', 'key 3']);
        });

        it('should get all values', () => {
            expect(dictionary.getValues()).to.eql([ 1, 6, 5, 4, 3 ]);
        });

    });