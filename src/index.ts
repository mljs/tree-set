export type TreeSetComparator<T> = (a: T, b: T) => number;

export class TreeSet<T = number> {
  private length: number;
  private comparator: TreeSetComparator<T>;
  public elements: T[];

  constructor(comparator?: TreeSetComparator<T>) {
    this.length = 0;
    this.elements = [];
    if (comparator) {
      this.comparator = comparator;
    } else {
      // @ts-expect-error Default to TreeSet<number>
      this.comparator = ((a, b) => {
        return a - b;
      }) as TreeSetComparator<number>;
    }
  }

  size() {
    return this.elements.length;
  }

  last() {
    return this.elements[this.length - 1];
  }

  first() {
    return this.elements[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  pollLast() {
    if (this.length > 0) {
      this.length--;
      return this.elements.splice(this.length, 1);
    }
    return null;
  }

  pollFirst() {
    if (this.length > 0) {
      this.length--;
      return this.elements.splice(0, 1);
    }
    return null;
  }

  add(element: T) {
    let index = this.binarySearch(element);
    if (index < 0) {
      index = -index - 1;
    }
    this.elements.splice(index, 0, element);
    this.length++;
  }

  /**
   * Performs a binary search of value in array
   * @param value - Value to search in array
   * @return {number} If value is found, returns its index in array. Otherwise, returns a negative number indicating where the value should be inserted: -(index + 1)
   */
  binarySearch(value: T) {
    let low = 0;
    let high = this.elements.length - 1;

    while (low <= high) {
      const mid = (low + high) >>> 1;
      const midValue = this.elements[mid] as T;
      const cmp = this.comparator(midValue, value);
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
