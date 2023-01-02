function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var day = dateTime.getDate();
    var month = dateTime.getMonth() + 1;
    var year = dateTime.getFullYear();
 

    if(hrs >= 12){
        period.innerHTML = 'PM';
    }else {
        period.innerHTML = 'AM';
    }
    if(hrs > 12){
        hrs = hrs - 12;
    }else if (hrs == 00){
        hrs = 12;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("year").innerHTML = year;


}
setInterval(displayTime, 10);
