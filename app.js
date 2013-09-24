var Counter = require('./counterCB.js');

var c = new Counter(1);

var callback = function(err, data)
{
	if(err)
	{
		console.log('Error: ' + err);
	}else{
		console.log(data);

	}
	return;
}


setInterval(function() {	
		c.increment(callback);
	}, 300);


/*
while(true)
{
c.increment(callback);
}
*/



