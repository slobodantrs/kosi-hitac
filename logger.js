

var url='http://mylogger.io/log';
const EventEmmitor=require('events');
// const emmiter=new EventEmmitor();

class Logger extends EventEmmitor{
	

	log(message){
	
		//Send an HTTP request
		console.log(message);
		//Raise an event
		this.emit('messageLogged',{id:1,url:'http://'});

	
	}
}

module.exports=Logger;
