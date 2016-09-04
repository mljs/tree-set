# tree-set

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]
  [![David deps][david-image]][david-url]
  [![npm download][download-image]][download-url]
  
A JavaScript emulator of the TreeSet Java class

## Installation

```
$ npm install ml-tree-set
```

## Documentation

TreeSet allows to create a sorted array of objects by adding each new element in order, according with the comparator` function`.
TreeSet does not really implements a tree to maintain the order. It just add the elements in the correct place in the array. 
Nevertheless adding, removing or finding an element is guaranteed to be performed in log(n).

Unlike the other binary-tree implementations available in npm, this one allows repeated keys.


###constructor(comparator): 

Create a new TreeSet object. The comparator gives the order to the set. By default it is the natural comparator

```
function(a, b){ return a - b };
```

### add(element): 

Add an element to the sorted list

### size(): 

Return the number of elements in the set

### last(): 

Return the last element of the sorted list

### first(): 

Return the first element of the sorted list

### pollLast(): 

Return and removes the last element of the sorted list

### pollFirst(): 

Return and removes the first element of the sorted list

### binarySearch(element): 

Performs a binary search of value in array

##Example

```js
 const myList = new TreeSet(function( a, b){ return a.index - b.index; });
 myList.add({index:0,value:"a"});
 myList.add({index:3,value:"d"});
 myList.add({index:2,value:"c"});
 myList.pollFirst();
 myList.add({index:1,value:"b"});
 //The myList.elements should be: [{index:1,value:"b"},{index:2,value:"c"},{index:3,value:"d"}]);
 //myList.size() should be equal to 3;
```


## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/ml-tree-set.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ml-tree-set
[travis-image]: https://img.shields.io/travis/mljs/tree-set/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/mljs/tree-set
[david-image]: https://img.shields.io/david/mljs/tree-set.svg?style=flat-square
[david-url]: https://david-dm.org/mljs/tree-set
[download-image]: https://img.shields.io/npm/dm/ml-tree-set.svg?style=flat-square
[download-url]: https://npmjs.org/package/ml-tree-set
