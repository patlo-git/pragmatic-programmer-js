class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.length = this.calculateLength();
  }

  calculateLength() {
    return this.length = this.end - this.start;
  }

  setStart(p) {
    this.start = p;
    this.length = this.calculateLength();
  }

  setEnd(p) {
    this.end = p;
    this.length = this.calculateLength();
  }
}

const line1 = new Line(30, 50);
console.log('-- Initial Values --');
console.log('Start: ', line1.start);
console.log('End: ', line1.end);
console.log('Length: ', line1.length);

console.log('-- Changed Values --');
line1.setStart(20);
line1.setEnd(75);
console.log('Start: ', line1.start);
console.log('End: ', line1.end);
console.log('Length: ', line1.length);