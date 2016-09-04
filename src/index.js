'use strict';
/**
 * Created by acastillo on 9/3/16.
 */

class TreeSet{

    constructor(compatator){
        this.length = 0;
        this.elements = [];
        if(compatator)
            this.compatator = compatator;
        else
            this.compatator = function(a, b){ return a - b };
    }

    size(){
        return this.elements.length;
    }

    last(){
        return this.elements[this.length-1];
    }

    first(){
        return this.elements[0];
    }

    isEmpty(){
        return this.size()===0;
    }

    pollLast(){
        if(this.length>0){
            this.length--;
            return this.elements.splice(this.length, 1);
        }
        return null;
    }

    pollFirst(){
        if(this.length>0) {
            this.length--;
            return this.elements.splice(0, 1);
        }
        return null;
    }

    add(element){
        let index = this.binarySearch(element);
        if(index < 0){
            index = -index-1;
        }
        this.elements.splice(index, 0, element);
        this.length++;
    }

    /**
     * Performs a binary search of value in array
     * @param {number[]} array - Array in which value will be searched. It must be sorted.
     * @param {number} value - Value to search in array
     * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
     */
    binarySearch(value) {
        var low = 0;
        var high = this.elements.length - 1;

        while (low <= high) {
            var mid = (low + high) >>> 1;
            var midValue = this.elements[mid];
            var cmp = this.compatator(midValue, value);
            if (cmp < 0) {
                low = mid + 1;
            } else if (cmp > 0) {
                high = mid - 1;
            } else {
                return mid;
            }
        }

        return -(low + 1);
    }
}

module.exports = TreeSet;