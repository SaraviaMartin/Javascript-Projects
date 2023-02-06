function startTime(){
    let today = new Date();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    document.getElementById('clock').innerHTML = hour + ":" + min + ":" + sec;
    var time = setTimeout(function(){ startTime() }, 500);
}