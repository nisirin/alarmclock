
var current_time = document.getElementById('current_time'); // to get current time to display

setInterval(() => {
    var date = new Date();
    current_time.innerHTML = date.toLocaleTimeString();
}, 1000);

var setAlarm = document.getElementById('setalarm'); //button 'Set Alarm'

setAlarm.addEventListener('click', () => { // on clicking Set Alarm Button
    var inp = document.getElementById("inp"); // get user input for setting alarm time
    var inpVal = inp.value;
    console.log(inpVal);
    if (!inpVal) {
        alert("pls enter a valid time for alarm");
        return;
    }

    var ul = document.getElementById("ul");
    var li = document.createElement('li');

    li.textContent = inpVal + ' '; //li will contain the time to be set as alarm 

    var delAlarm = document.createElement('button'); // create Delete Button
    delAlarm.textContent = "Delete";
    delAlarm.id = "del";
    delAlarm.style.marginLeft = "10px";
    li.appendChild(delAlarm); // li will now have alarm time + delete button
    ul.appendChild(li);

    delAlarm.addEventListener('click', () => {  // delete operation on clicking Delete Button
        var pr = prompt("Do you wish to delete the alarm?");
        if ((pr) == "yes") {
            ul.removeChild(li);
        }
    }) 

    inp.value = ""; // to clear input text field so that user can take a new alarm time
})





