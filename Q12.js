const duration=4000;
function timer(duration){
    console.log(`Timer started `);
}
function onComplete(callback){
    setTimeout(()=>{
        console.log(`${duration}ms is finished`);
        callback();
    },duration)
}
onComplete(timer);