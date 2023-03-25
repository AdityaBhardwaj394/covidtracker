let a=true;

setTimeout(() => {
    a=false;
}, 5000);
setInterval(() => {
    if(a){
        console.log("hello");
    }
}, 200);
// function foo(){
//     yoo();   
// }
// function yoo(){
//     poo();
// }
// function poo(){
//     throw new console.error("error");
// }
// foo();
// var booli= true;
// function foo(){
//     let =a;
// }