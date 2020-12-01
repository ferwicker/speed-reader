console.log("connected");

var body = document.querySelector("body");

var wordsMinute = document.getElementById("wordsMinute");
var text = document.getElementById("text");

var fontEl = document.getElementById("font-select");
var arial = document.getElementById("arial-bold");
var georgia = document.getElementById("georgia");
var ptMono = document.getElementById("pt-mono");

var contrastEl = document.getElementById("contrast-select");

var submit = document.getElementById("submit");



// Font Changer - do same for colours

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


//submit.addEventListener("click", //function//)