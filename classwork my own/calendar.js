var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// call displayDate every second
setInterval(displayDate, 1000);

function displayDate() {
    // create a new Date object each time to get current time
    var d = new Date();

    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    
    // convert 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // add leading zeros
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;

    todayDate.innerHTML = d.toDateString() + " " + currentTime;
}

function displayActivity() {
    var d = new Date(); // get current date/time
    var dayOfWeek = d.getDay();
    var youShould;

    switch (dayOfWeek) {
        case 0: // Sunday
            youShould = "Take it easy. You've earned it.";
            break;
        case 1: // Monday
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2: // Tuesday
            youShould = "Take time to smell the roses!";
            break;
        case 3: // Wednesday
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4: // Thursday
            youShould = "Learn something new today!";
            break;
        case 5: // Friday
            youShould = "Make a list of things you like to do.";
            break;
        case 6: // Saturday
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Hmm. Something has gone wrong.";
            break;
    }

    var timeOff = (dayOfWeek === 0 || dayOfWeek === 6) 
        ? "Enjoy your time off!" 
        : "Work hard and stay productive!";

    document.getElementById("thingToDo").innerHTML = youShould + "<br>" + timeOff;
}
