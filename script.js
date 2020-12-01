console.log("connected");

var body = document.querySelector("body");

var wordsMinute = document.getElementById("wordsMinute");
var text = document.getElementById("text");

var fontEl = document.getElementById("font-select");
var arial = document.getElementById("arial-bold");
var georgia = document.getElementById("georgia");
var ptMono = document.getElementById("pt-mono");

var contrastEl = document.getElementById("contrast-select");
var highContrast = document.getElementById("high-contrast");
var mildContrast = document.getElementById("mild-contrast");
var darkContrast = document.getElementById("dark-contrast");

var submit = document.getElementById("submit");



// Font Changer 

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


//submit.addEventListener("click", //function//)