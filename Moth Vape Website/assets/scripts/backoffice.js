const date_display = document.getElementById("date-display");
const time_display = document.getElementById("time-display"); 

function dateAndTimeInterval()
{
    updateDate(date_display);
    updateTime(time_display);
}

function updateDate(date_display)
{
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();

    let formattedDate = `${month}/${day}/${year}`;

    date_display.innerText = `Date: ${formattedDate}`;
}

function updateTime(time_display)
{
    let currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds();

    if (minutes < 10)
    {
        minutes = `0${minutes}`
    }

    if (seconds < 10)
    {
        seconds = `0${seconds}`
    }
    
    let formattedTime = `${hours}:${minutes}:${seconds} `;

    if (hours > 11)
    {
        formattedTime += "PM";
    } 
    else 
    {
        formattedTime += "AM";
    }

    time_display.innerText = `Time: ${formattedTime}`;
}

function signOut()
{
    location.href = "../pages/login.html";
}

dateAndTimeInterval();
setInterval(dateAndTimeInterval, 1000);