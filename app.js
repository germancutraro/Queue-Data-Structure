function Queue() {
  this.data = [];
}

Queue.prototype.add = function(record) {
  this.data.unshift(record);
}

Queue.prototype.remove = function() {
  if(this.data.length < 1)return "Empty queue";//or throw new Exception ("Queue empty");	
  return this.data.pop();
}

Queue.prototype.first = function() {
  if(this.data.length < 1)return "Empty queue";//or throw new Exception ("Queue empty");	 	
  return this.data[0];
}

Queue.prototype.last = function() {
  if(this.data.length < 1)return "Empty queue";//or throw new Exception ("Queue empty");	 	
  return this.data[this.data.length - 1];
}

Queue.prototype.size = function() {
  return this.data.length;
}

// Create a Queue
const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
var i =0;
console.log(`${++i} remove `+ q.remove());
console.log(q);
console.log(`Size of the Queue: ${q.size()}`)

console.log(`${++i} remove `+ q.remove());
console.log(`${++i} remove `+ q.remove());
console.log(`${++i} remove `+ q.remove());
console.log(`${++i} remove `+ q.remove());
console.log(`${++i} remove `+ q.remove());

console.log(`Size of the Queue: ${q.size()}`)
