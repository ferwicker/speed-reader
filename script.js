var body = document.querySelector("body");
var mainScreen = document.getElementById("main");
var readerScreen = document.getElementById("screen-2");
var readerArea = document.getElementById("reader");

var wordsEl = document.getElementById("wordsMinute"); //to calculate speed

var textEl = document.getElementById("text");


var fontEl = document.getElementById("font-select");
var montserrat = document.getElementById("montserrat");
var arial = document.getElementById("arial-bold");
var georgia = document.getElementById("georgia");
var ptMono = document.getElementById("pt-mono");

var contrastEl = document.getElementById("contrast-select");
var highContrast = document.getElementById("high-contrast");
var mildContrast = document.getElementById("mild-contrast");
var darkContrast = document.getElementById("dark-contrast");

var submit = document.getElementById("submit");
var stopButton = document.getElementById("stop-button");


// Font Changer 

montserrat.addEventListener("click", function() {    
    body.classList.remove("arial-bold", "georgia", "pt-mono")
});

arial.addEventListener("click", function() {    
        body.classList.add("arial-bold");
        body.classList.remove("georgia", "pt-mono")
  });

georgia.addEventListener("click", function() {    
        body.classList.add("georgia");
        body.classList.remove("arial-bold", "pt-mono")
});

ptMono.addEventListener("click", function() {    
    body.classList.add("pt-mono");
    body.classList.remove("georgia", "arial-bold")
});

// Colour Changer

highContrast.addEventListener("click", function() {    
    body.classList.add("high-contrast");
    body.classList.remove("mild-contrast", "dark-contrast")
});

mildContrast.addEventListener("click", function() {    
    body.classList.add("mild-contrast");
    body.classList.remove("high-contrast", "dark-contrast")
});

darkContrast.addEventListener("click", function() {    
body.classList.add("dark-contrast");
body.classList.remove("high-contrast", "mild-contrast")
});

// Calculate speed of words
var speed;

var calculateSpeed = function (){
    var wordsMinute = parseInt(wordsEl.value);
    console.log(wordsMinute);
    speed = (1000 / wordsMinute)*60;
    console.log(speed);
    return speed;
}

var readInterval;

  // Print words to the screen one at a time. needs revising.
  var i = 0;
  function speedRead() {
      calculateSpeed();
      console.log(speed);
      var text = textEl.value
      var words = text.split(" ");
      readInterval = setInterval(function(){ // move out
        if (words[i] === undefined) {
          clearInterval(readInterval);
          goToScreen1();
          readerArea.textContent = 'Get ready!';
          i = 0;

        } else {
          readerArea.textContent = words[i]; //change element
          i++;
        }

      }, speed);
  
  }

// Create the countdown timer.
var timeInterval;

function prepareRead() {
    var secondsLeft = 5;
    timeInterval = setInterval(function(){
    readerArea.textContent = secondsLeft
    secondsLeft--;
  
      if (secondsLeft === -1) {
        readerArea.textContent = '' // need to create the timer element, hide the main container
        clearInterval(timeInterval);
        speedRead(); //calling speedRead function at end of timer! leave this one here.
      }
    }, 1000);
  };

//changing visibility of the screens

function goToScreen2(){
    mainScreen.setAttribute("style", "visibility: hidden;");
    readerScreen.classList.remove("hide");
};

function goToScreen1(){
    mainScreen.setAttribute("style", "visibility: visible;");
    readerScreen.classList.add("hide");
}

// When submit button is clicked

function startReading (event){
    event.preventDefault();
    goToScreen2();
    prepareRead();
}

//Stop Reading **
function stopReading (event){
    goToScreen1();

    if(timeInterval || readInterval){
      clearInterval(timeInterval);
      clearInterval(readInterval);
    }

    readerArea.textContent = 'Get ready!';
    secondsLeft = 5;
    i = 0;

    //if interval is not undefined stop interval
} 

// Button event listeners

submit.addEventListener("click", startReading);
stopButton.addEventListener("click", stopReading);