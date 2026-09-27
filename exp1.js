//1	
console.log("======1st part======");
const EventEmitter = require('events');
const { timestamp } = require('events');
const ks = new EventEmitter()
ks.on('greet', (name) => {
    console.log(`Hello there, ${name}!`);
});
ks.on(`exit`,(number)=>{
    console.log(`Exiting....thankyou ${number}`);
})
ks.emit('greet', 'Omika');
ks.emit('exit', 110);
//2
console.log("======2nd part======");
class Button extends EventEmitter {
    click(){
        console.log('Button clicked');
        this.emit('click',{timestamp: Date.now()});
    }
}
const button = new Button();
button.on('click', (event) => {
    console.log(`Button was clicked at ${event.timestamp}`);
});
button.click();
//3
console.log("======3rd part======");
setTimeout(() => {
    console.log('HELLO Omika');
}, 3000);
function printMessage2() {
    console.log('HELLO Kavish');
}
printMessage2();
