var elem = document.getElementById("changeTimer");
var elem_mode = document.getElementById("mode");
var elem_button = document.getElementById("button1");
elem_button.innerHTML = "Start";

var minute = 0;
var second = 0;

function leftPad(number, targetLength) {
    var output = number + '';
    while (output.length < targetLength) {
        output = '0' + output;
    }
    return output;
}

function timer(minutes) {
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;
    
    if (minutes == 25)
    {
        elem_mode.innerHTML = "Mode: Study";
    }
    
    second++;
    
    if (second >= 60) {
        second = 0;
        minute ++;   
    }

    if (minute >= minutes){
        clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    }
}


function click_timer() {
    if (elem_button.innerHTML == "Start"){
        elem_button.innerHTML = "Stop";
        // Organize into for loop; change modes to reflect study vs break and round
        setInterval("timer(25)", 1000);
        setInterval("timer(5)", 1000);
        setInterval("timer(25)", 1000);
        setInterval("timer(5)", 1000);
        setInterval("timer(25)", 1000);
        setInterval("timer(5)", 1000);
        setInterval("timer(25)", 1000);
        setInterval("timer(5)", 1000);

        // add control for stop to break function
    }
    
}

