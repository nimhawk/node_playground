exports = module.exports = CounterCB;


function CounterCB(initial_no) { 
	this.count = initial_no;
}

CounterCB.prototype.count = this.count;

CounterCB.prototype.debug = function() {
	console.log(this.count);
	return;
}

CounterCB.prototype.increment = function(cb) {
	var self = this;

	var error = false;

	self.count++;

	if(self.count % 10 === 0)
	{
		error = true;
	}

	if(error)
	{
		return cb(new Error('multiple of 10!'), null);
	}else{
		return cb(null, self.count);
	}
}



