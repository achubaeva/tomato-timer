var elem = document.getElementById("changeTimer");
var elem_mode = document.getElementById("mode");
var elem_button = document.getElementById("reset_button");
elem_button.innerHTML = "RESET";
var reset = true;
second = 0;
minute = 0;

function leftPad(number, targetLength) 
{
    var output = number + '';
    while (output.length < targetLength) 
    {
        output = '0' + output;
    }
    return output;
}



// document.getElementById("reset_button").addEventListener("resetClick", function(){
//     //stopTimer();
//     elem_mode.innerHTML == "Mode: RESET";

//   });


elem_mode.innerHTML == "Mode: ON"

function timer(minutes) 
{
    
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;

    if (elem_mode.innerHTML == "Mode: OFF")
    {
        clearInterval(inst); 
    }

    if (minute == 25)
    {
        elem_mode.innerHTML = "Mode: OFF";
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

function resetClick()
{
    elem_button.innerHTML = "Mode: RESET";
    second = 0;
    minute = 0;
    s = leftPad(second, 2);
    m = leftPad(minute, 2);
    elem.innerHTML = m + ":" + s;
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
            elem_mode.innerHTML = "Mode: Study";
            
            startTimer();
          } else {
            // do that
            elem_mode.innerHTML = "Mode: OFF";
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



