/*
* Top progress bar in a web page.
 */

// Define an empty object
let progressBar = {};

// Add an event listener on document to verify the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
progressBar.bar = document.getElementById("progress");
// retrieve the html element with documentElement
progressBar.html =document.documentElement;
// assign width = 0 to the bar
progressBar.bar.style.width ="0%";
});

// Add an eventListener on the page scroll
window.addEventListener('scroll', progressBarFn);
function progressBarFn() {
    // total scroll =  total document height - visible screen height
    const totalScroll = progressBar.html.scrollHeight - progressBar.html.clientHeight;
    // scroll done by user in % =   scroll top * 100 / total scroll.
    progressBar.bar.style.width = (progressBar.html.scrollTop * 100) / totalScroll + "%";
}


