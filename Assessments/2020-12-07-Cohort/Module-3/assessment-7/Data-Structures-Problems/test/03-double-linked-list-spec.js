const chai = require('chai');
const expect = chai.expect;

const solution = require('../03-double-linked-list');

let DoubleLinkedList = null;

if (solution !== null) {
  ({ DoubleLinkedList } = solution);
}

describe('DoubleLinkedList', () => {
  let list;
  beforeEach(() => list = new DoubleLinkedList());

  context('peekAtTail()', () => {
    it('that returns undefined for an empty list', () => {
      const result = list.peekAtTail();
      expect(result).to.be.undefined;
    });

    it("that returns the value of the tail for a non-empty list", () => {
      const expected = Math.random();

      list.addToHead(expected);
      let result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.addToHead(100);
      result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.removeFromHead();
      result = list.peekAtTail();
      expect(result).to.equal(expected);

      list.removeFromHead();
      result = list.peekAtTail();
      expect(result).to.be.undefined;
    });
  });

  context('addToTail()', () => {
    it('that sets head and tail on first insert', () => {
      const expected = Math.random();

      list.addToTail(expected);

      const tailResult = list.peekAtTail();
      const headResult = list.peekAtHead();

      expect(tailResult).to.equal(expected);
      expect(headResult).to.equal(expected);
    });

    it("that sets the next and previous values on nodes appropriately on an insert", () => {
      const nodeValue1 = Math.random();
      const nodeValue2 = Math.random();
      const nodeValue3 = Math.random();

      list.addToTail(nodeValue1);
      list.addToTail(nodeValue2);
      list.addToTail(nodeValue3);

      const tail = list.tail;
      const head = list.head;
      const middle = list.tail.previous;

      expect(tail.previous.value).to.equal(nodeValue2);
      expect(head.next.value).to.equal(nodeValue2);

      expect(middle.next.value).to.equal(nodeValue3);
      expect(middle.previous.value).to.equal(nodeValue1);

      expect(tail.next).to.equal(null);
      expect(head.previous).to.equal(null);
    });

    it('that increases the size with each insert', () => {
      const upperBound = Math.ceil(Math.random() * 100) + 10;

      for (let i = 0; i < upperBound; i += 1) {
        expect(list.getSize()).to.equal(i);
        list.addToTail(i);
        expect(list.getSize()).to.equal(i + 1);
      };
    });
  });

  context('removeFromTail()', () => {
    it('that returns undefined for an empty list', () => {
      const result = list.removeFromTail();

      expect(result).to.be.undefined;
    });

    it("that updates the length for a non-empty list", () => {
      const upperBound = Math.ceil(Math.random() * 100) + 10;

      for (let i = 0; i < upperBound; i += 1) {
        list.addToTail(i * upperBound);
      }

      for (let j = upperBound - 1; j >= 0; j--) {
        list.removeFromTail();
        expect(list.getSize()).to.equal(j);
      }
    });

    it('that removes and returns the value from the tail', () => {
      const upperBound = Math.ceil(Math.random() * 100) + 10;

      for (let i = 0; i < upperBound; i += 1) {
        list.addToTail(i * upperBound);
      };

      for (let j = upperBound - 1; j >= 0; j--) {
        const result = list.removeFromTail();
        expect(result).to.equal(j * upperBound);
      }
    });
  });
});