const duration=4000;
function timer(duration,onComplete){
    console.log(`Timer started `);

    setTimeout(()=>{
        onComplete(`Timer of ${duration}ms finished`)
    },duration)
}
timer(5000,(msg)=>console.log(msg));