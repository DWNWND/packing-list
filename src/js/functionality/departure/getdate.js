var x;

export function getDeparturetime() {
  const datetimeInput = document.getElementById("departuretime");

  datetimeInput.addEventListener("input", (e) => {
    e.preventDefault();
    // Clear the previous countdown interval
    clearInterval(x);
    const datetimeValue = e.target.value;

    var countDownDate = new Date(datetimeValue).getTime();
    localStorage.setItem("departure", JSON.stringify(countDownDate));
    countdown();
  });
}

export function countdown() {
  // Set the date we're counting down to
  var countDownDate = localStorage.getItem("departure");

  if (countDownDate) {
    // Update the count down every 1 second
    x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"

      const daysElement = document.querySelector(".days");
      const hoursElement = document.querySelector(".hours");
      const minutesElement = document.querySelector(".minutes");
      const secondsElement = document.querySelector(".seconds");

      const daysDisplayed = daysElement.querySelector(".time");
      const hoursDisplayed = hoursElement.querySelector(".time");
      const minutesDisplayed = minutesElement.querySelector(".time");
      const secondsDisplayed = secondsElement.querySelector(".time");

      daysDisplayed.innerText = days;
      hoursDisplayed.innerText = hours;
      minutesDisplayed.innerText = minutes;
      secondsDisplayed.innerText = seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        console.log("expired");
        // document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
}
