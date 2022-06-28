// better version of 1
// but this does sort of violate dry as far as performance goes b/c have to run the calcLength function each time rather than having a saved length like start and end
class Line {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  calculateLength() {
    return this.end - this.start;
  }
}

const line1 = new Line(30, 50);
console.log('Start: ', line1.start);
console.log('End: ', line1.end);
console.log('Length: ', line1.calculateLength());
