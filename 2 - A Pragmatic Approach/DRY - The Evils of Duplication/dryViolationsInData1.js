class Line {
  constructor(start, end, length) {
    this.start = start;
    this.end = end;
    this.length = length;
  }
}

const line1 = new Line(30, 50, 50 - 30);
console.log('Start: ', line1.start);
console.log('End: ', line1.end);
console.log('Length: ', line1.length);
