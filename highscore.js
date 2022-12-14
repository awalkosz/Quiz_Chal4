
var clear = document.querySelector("#Clear");
var back = document.querySelector("#Back");

clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});


back.addEventListener("click", function() {
    document.location.replace("./quiz.html");
});