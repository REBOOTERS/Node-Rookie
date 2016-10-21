/**
 * Created by Rookie_rebooter on 2016/10/21.
 */

var event=require('events');

var eventEmitter=new event.EventEmitter();

//创建事件处理程序
var connectHandler =function connected() {
    console.log("connected success");
    // 触发 data_received 事件
    eventEmitter.emit('data_received');
    eventEmitter.emit('rookie_event');
};

//绑定connection事件处理程序
eventEmitter.on('connection', connectHandler);


// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

//使用匿名函数绑定自定义事件 rookie_event

eventEmitter.on('rookie_event',function () {
    console.log('custom rookie_event success');
});

//触发connection 事件
eventEmitter.emit('connection');

console.log("finished");


