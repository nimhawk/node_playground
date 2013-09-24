var events = require('events')
  ,	util = require('util');


exports = module.exports = CounterEvented;

function CounterEvented(initial_no) { 
	this.count = initial_no;

	events.EventEmitter.call(this);
}

util.inherits(CounterEvented, events.EventEmitter);

CounterEvented.prototype.count = this.count;

CounterEvented.prototype.debug = function() {
	console.log(this.count);
	return;
}

CounterEvented.prototype.increment = function() {
	var self = this;
	setInterval(function() {	
		if(self.count % 2 === 0) {
			self.emit('even');
			//console.log('even');

		}
		self.count++;
	}, 300);
}


