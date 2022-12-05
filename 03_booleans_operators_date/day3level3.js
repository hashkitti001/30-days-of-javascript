let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
let date = new Date;
let year = date.getFullYear();
let month = months[date.getMonth() - 1];
let day = date.getDate();
//add 0 to the time string if an element is less than 10
    let hr = date.getHours();
    let min = date.getMinutes();
    hr < 12? "0" + hr: hr;
    min < 10 ? min = "0" + min : min;
    if(hr > 12) {
        hr = hr - 12;
    }
    hr >= 12?  min = min + "AM": min = min + "PM";
    let time = hr + ":" + min;
    let timeString = year + "0" + "-" + month + "-" + day + " " + time;
    console.log(timeString);
