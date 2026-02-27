// Listing 14 - 1
var language = prompt("What language do you speak?");

if (language === "JavaScript") {
    alert("Great! Let's talk JavaScript!");
} else {
    alert("I don't know what you're saying.");
}

// Listing 14 - 2
var language = prompt("What language do you speak?");

if (language === "JavaScript") {
 alert("Great! Let's talk JavaScript!");
 var speaksJavaScript = true;
} else {
 alert("I don't know what you're saying.");
}

if (speaksJavaScript) {
 alert("It's great to meet you.");
}

