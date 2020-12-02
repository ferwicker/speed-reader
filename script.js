console.log("connected");

var body = document.querySelector("body");
var mainScreen = document.getElementById("main");
var readerScreen = document.getElementById("screen-2");

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

  // Print words to the screen one at a time. needs revising.
  var i = 0;
  function speedRead() {
      calculateSpeed();
      console.log(speed);
      var text = textEl.value
      var words = text.split(" ");
      var readInterval = setInterval(function(){
        if (words[i] === undefined) {
          clearInterval(readInterval);
        } else {
          readerScreen.textContent = words[i]; //change element
          i++;
        }
      }, speed);
  
  }

// Create the countdown timer.

function prepareRead() {
    var secondsLeft = 5;
    var timeInterval = setInterval(function(){
    readerScreen.textContent = secondsLeft
    secondsLeft--;
  
      if (secondsLeft === 0) {
        readerScreen.textContent = '' // need to create the timer element, hide the main container
        clearInterval(timeInterval);
        speedRead(); //calling speedRead function at end of timer! leave this one here.
      }
    }, 1000);
  };

function goToScreen2(){
    mainScreen.classList.add("hide");
    readerScreen.classList.remove("hide");
};

function goToScreen1(){
    mainScreen.classList.remove("hide");
    readerScreen.classList.add("hide");
};

function startReading (event){
    event.preventDefault();
    goToScreen2();
    prepareRead();
}

//add reset to start.

submit.addEventListener("click", startReading)