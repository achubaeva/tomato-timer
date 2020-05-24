var elem = document.getElementById("changeTimer");
Mode = document.getElementById("mode")
var elem_button = document.getElementById("reset_button");
elem_button.innerHTML = "RESET";
var reset = true;
second = 0;
minute = 0;
document.getElementById('tomatoPic').src='tomato.png';
//Mode.innerHTML = "off";
mode = "off";

function leftPad(number, targetLength) 
{
    var output = number + '';
    while (output.length < targetLength) 
    {
        output = '0' + output;
    }
    return output;
}

function timer(study_time, break_time) 
{
    
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;

    if (mode == "study")
    {
        document.getElementById('tomatoPic').src='study.png';
    }

    if (mode == "break")
    {
        document.getElementById('tomatoPic').src='break.png';
    }

    if (mode == "off")
    {
        //elem_mode.innerHTML = "Mode: OFF";
        mode = "study";
    }

    if (mode == "study" && minute == study_time)
    {
        mode = "break";
        minute = 0;
        second = 0;

    }

    if (mode == "break" && minute == break_time)
    {
        mode = "study";
        minute = 0;
        second = 0;
    }
    
    second++;
    
    if (second >= 60) 
    {
        second = 0;
        minute ++;   
    }

    // if (minute >= minutes)
    // {
    //     clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    // }



}

function resetClick()
{
    //elem_button.innerHTML = "Mode: RESET";
    mode = "reset";
    //Mode.innerHTML == "reset";
    second = 0;
    minute = 0;
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;
    document.getElementById('tomatoPic').src='tomato.png';
}

function startTimer() {
    timer_funct = setInterval("timer(1, 1)", 1000);
  }

function stopTimer() {
    clearInterval(timer_funct);
  }

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
      
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            // do this
            //elem_mode.innerHTML = "Mode: Study";
            
            
            startTimer();
          } else {
            // do that
            //elem_mode.innerHTML = "Mode: OFF";
            mode = "off";
            //Mode.innerHTML == "off";
            stopTimer();
          }
        });
      });

// Add clear button


// function reset() {
//     stopTimer();
//     elem_mode.innerHTML == "Mode: OFF";
//     elem.innerHTML = "00:00"
//     reset = true;

// }



