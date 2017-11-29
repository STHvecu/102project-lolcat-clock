var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 3; // 2PM


// Start of Code for updateClock function
var updateClock = function () 
{
var timeEventJS = document.getElementById("timeEvent");
var lolcatImage = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == partyTime) 
{
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
} 
  else if (time == napTime) 
  {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";	
    messageText = "IZ NAP TIME...";
  } 
    else if (time==lunchTime) 
    {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";	
    messageText = "IZ NOM NOM NOM TIME!!";
    } 
      else if (time==wakeupTime) 
      {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";	
      messageText = "IZ TIME TO GETTUP.";
      } 
        else if (time < noon) 
        {
        messageText = "Good morning!";
        } 
          else if (time > evening) 
            {
            messageText = "Good Evening!";
            } 
              else 
              {
              messageText = "Good afternoon!";
              };

lolcatImage.src = image;
timeEventJS.innerText = messageText;

var showCurrentTime = function ()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

showCurrentTime(); 
}
// END of Code for updateClock function

// CALL updateClock Function:
updateClock(); 

// Increment the Clock by 1 second:
var oneSecond = 1000; 
setInterval(updateClock, oneSecond);


// PARTY TIME CODE
var isPartyTime = false;
var jsPartyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function ()
{
  if (isPartyTime === false)
  {
    isPartyTime = true;
    time = partyTime;
    jsPartyTimeButton.style.backgroundColor = "#222";
    jsPartyTimeButton.innerText = "PARTY TIME!";
  }
  else
    {
      isPartyTime = false;
      time = new Date().getHours();
      jsPartyTimeButton.style.backgroundColor = "#0A8dab";
      jsPartyTimeButton.innerText = "PARTY OVER";
    }
};

jsPartyTimeButton.addEventListener("click", partyEvent);



// CODE FOR WAKEUP TIME CHANGE SELECTOR
var jsWakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function ()
{
    wakeupTime = jsWakeUpTimeSelector.value;
};

// CODE FOR LUNCH TIME CHANGE SELECTOR
var jsLunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchEvent = function ()
{
    lunchTime = jsLunchTimeSelector.value;
};

// CODE FOR NAP TIME CHANGE SELECTOR
var jsNapTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function ()
{
    napTime = jsNapTimeSelector.value;
};

 
jsWakeUpTimeSelector.addEventListener("change", wakeUpEvent);
jsLunchTimeSelector.addEventListener("change", lunchEvent);
jsNapTimeSelector.addEventListener("change", napEvent);






