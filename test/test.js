'use strict';

const TreeSet = require("..");

describe('Tree set', function () {
    it('Object generation', function () {
        const myList = new TreeSet();
        myList.should.hasOwnProperty("length");
    });

    it('Natural order', function () {
        const myList = new TreeSet();
        myList.add(0);
        myList.add(3);
        myList.add(2);
        myList.add(1);
        myList.elements.should.eql([0,1,2,3]);
        myList.size().should.eql(4);

    });

    it('Inverted order', function () {
        const myList = new TreeSet(function( a, b){ return b -a; });
        myList.add(0);
        myList.add(3);
        myList.add(2);
        myList.add(1);
        myList.elements.should.eql([3,2,1,0]);
        myList.size().should.eql(4);

    });

    it('Array of objects: Add', function () {
        const myList = new TreeSet(function( a, b){ return a.index - b.index; });
        myList.add({index:0,value:"a"});
        myList.add({index:3,value:"d"});
        myList.add({index:2,value:"c"});
        myList.add({index:1,value:"b"});
        myList.elements.should.eql([{index:0,value:"a"},{index:1,value:"b"},{index:2,value:"c"},{index:3,value:"d"}]);
        myList.size().should.eql(4);
    });

    it('Array of objects: Add and pollFirst()', function () {
        const myList = new TreeSet(function( a, b){ return a.index - b.index; });
        myList.add({index:0,value:"a"});
        myList.add({index:3,value:"d"});
        myList.add({index:2,value:"c"});
        myList.pollFirst();
        myList.add({index:1,value:"b"});
        myList.elements.should.eql([{index:1,value:"b"},{index:2,value:"c"},{index:3,value:"d"}]);
        myList.size().should.eql(3);
    });

    it('Array of objects: Add and pollLast()', function () {
        const myList = new TreeSet(function( a, b){ return a.index - b.index; });
        myList.add({index:0,value:"a"});
        myList.add({index:3,value:"d"});
        myList.add({index:2,value:"c"});
        myList.pollLast();
        myList.add({index:1,value:"b"});
        myList.elements.should.eql([{index:0,value:"a"},{index:1,value:"b"},{index:2,value:"c"}]);
        myList.size().should.eql(3);
    });
});