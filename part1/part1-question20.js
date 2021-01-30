time(){
var intervalID = scope.setInterval(findTime, 1000);
}
findTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
time();