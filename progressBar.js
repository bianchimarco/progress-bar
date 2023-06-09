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
    /* let larghezza = progressBar.bar.style.width;
    console.log(larghezza); */
}

// Define an empty object for percent
let progressBarPercent = {};

// Add an event listener on document to verify the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    progressBarPercent.percent = document.getElementById("percent");
    // retrieve the html element with documentElement
    progressBarPercent.html =document.documentElement;
    // assign 0% to the percent div
    progressBarPercent.percent.innerHTML ="0%";
});

// Add an eventListener on the page scroll
window.addEventListener('scroll', progressBarPercentFn);

// Set the function to calculate the scroll % scrolled by the user
function progressBarPercentFn() {
// total scroll =  total document height - visible screen height
    const totalScrollPercent = progressBarPercent.html.scrollHeight - progressBarPercent.html.clientHeight;
// scroll done by user in % =   scroll top * 100 / total scroll.
    progressBarPercent.percent.innerHTML = "hai letto il " + (progressBarPercent.html.scrollTop * 100) / totalScrollPercent + "%";

     larghezza = progressBarPercent.percent.innerHTML.substring(0,18) + "%";
    console.log(larghezza);
}



