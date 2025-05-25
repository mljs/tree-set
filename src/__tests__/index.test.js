import { describe, expect, it } from 'vitest';

import { TreeSet } from '../index.js';

describe('Tree set', () => {
  it('Object generation', () => {
    const myList = new TreeSet();
    expect(myList).toHaveProperty('length');
  });

  it('Natural order', () => {
    const myList = new TreeSet();
    myList.add(0);
    myList.add(3);
    myList.add(2);
    myList.add(1);
    expect(myList.elements).toStrictEqual([0, 1, 2, 3]);
    expect(myList.size()).toBe(4);
  });

  it('Inverted order', () => {
    const myList = new TreeSet((a, b) => {
      return b - a;
    });
    myList.add(0);
    myList.add(3);
    myList.add(2);
    myList.add(1);
    expect(myList.elements).toStrictEqual([3, 2, 1, 0]);
    expect(myList.size()).toBe(4);
  });

  it('Array of objects: Add', () => {
    const myList = new TreeSet((a, b) => {
      return a.index - b.index;
    });
    myList.add({ index: 0, value: 'a' });
    myList.add({ index: 3, value: 'd' });
    myList.add({ index: 2, value: 'c' });
    myList.add({ index: 1, value: 'b' });
    expect(myList.elements).toStrictEqual([
      { index: 0, value: 'a' },
      { index: 1, value: 'b' },
      { index: 2, value: 'c' },
      { index: 3, value: 'd' },
    ]);
    expect(myList.size()).toBe(4);
  });

  it('Array of objects: Add and pollFirst()', () => {
    const myList = new TreeSet((a, b) => {
      return a.index - b.index;
    });
    myList.add({ index: 0, value: 'a' });
    myList.add({ index: 3, value: 'd' });
    myList.add({ index: 2, value: 'c' });
    myList.pollFirst();
    myList.add({ index: 1, value: 'b' });
    expect(myList.elements).toStrictEqual([
      { index: 1, value: 'b' },
      { index: 2, value: 'c' },
      { index: 3, value: 'd' },
    ]);
    expect(myList.size()).toBe(3);
  });

  it('Array of objects: Add and pollLast()', () => {
    const myList = new TreeSet((a, b) => {
      return a.index - b.index;
    });
    myList.add({ index: 0, value: 'a' });
    myList.add({ index: 3, value: 'd' });
    myList.add({ index: 2, value: 'c' });
    myList.pollLast();
    myList.add({ index: 1, value: 'b' });
    expect(myList.elements).toStrictEqual([
      { index: 0, value: 'a' },
      { index: 1, value: 'b' },
      { index: 2, value: 'c' },
    ]);
    expect(myList.size()).toBe(3);
  });
});
