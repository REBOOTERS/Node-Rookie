/**
 * Created by Rookie_rebooters on 2016/10/21.
 */
var EventEmitter=require('events').EventEmitter;
var emitter=new EventEmitter();


emitter.on('first_event',function () {
    console.log("first_event received");
    emitter.emit('second_event');
});

emitter.on('second_event',function () {
    console.log("second_event received");
})

emitter.on('event_with_paramters',function (arg1,arg2) {
    console.log("event_with_paramters received", arg1, arg2);
});

//1000ms 后触发first_event 事件

setTimeout(function () {
    emitter.emit('first_event');
},1000);

//3000ms后触发一个带参数的事件
setTimeout(function () {
    emitter.emit('event_with_paramters', "BeiJin", "北京");
}, 3000);



