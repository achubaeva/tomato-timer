var elem = document.getElementById("changeTimer");
var elem_mode = document.getElementById("mode");
var elem_button = document.getElementById("button1");
elem_button.innerHTML = "Start";

var minute = 0;
var second = 0;

function leftPad(number, targetLength) 
{
    var output = number + '';
    while (output.length < targetLength) 
    {
        output = '0' + output;
    }
    return output;
}


function timer(minutes) 
{
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;

    if (elem_mode.innerHTML == "Mode: OFFFF")
    {
        clearInterval(inst); 
    }
    else
    {
    
        if (minutes == 25)
        {
            elem_mode.innerHTML = "Mode: Study";
        }
    
        second++;
    
        if (second >= 60) 
        {
            second = 0;
            minute ++;   
        }

        if (minute >= minutes)
        {
            clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
        }
    }

    
}

function startTimer() {
    timer_funct = setInterval("timer(25)", 1000);
  }


function stopTimer() {
    clearInterval(timer_funct);
  }

    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
      
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            // do this
            elem_mode.innerHTML = "Mode: ONNNNNN";
            
            startTimer();
          } else {
            // do that
            elem_mode.innerHTML = "Mode: OFFFF";
            stopTimer();
          }
        });
      });

// Add clear button

