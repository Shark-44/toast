var toastTimeout;
var progressInterval;
var duration = 5000;

function showToast() {
    var x = document.querySelector(".cardToast");
    x.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function(){
        x.classList.remove("show");
    }, duration); 
}

function moveProgressBar() {
    var progressBar = document.getElementById("progressBar");
    var width = 0;
    var intervalTime = 50; 
    var increment = (intervalTime / duration) * 100;

 
    clearInterval(progressInterval);
    progressBar.style.width = "0%";

    progressInterval = setInterval(growing, intervalTime);

    function growing() {
        if (width >= 100) {
            clearInterval(progressInterval);
        } else {
            width += increment;
            progressBar.style.width = width + "%";
        }
    }
}
