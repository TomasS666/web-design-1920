if (window.fetch) {
  console.log("has fetch")
}


// window.fetch("https://type.fit/api/quotes")
// .then(function(response) {
//   console.log("yes?")
//   return response.json();
// })
// .then(function(data) {
//   const quoteHolder = document.querySelector("h2[data-quote]")
//     console.log("yes, happened")
//   quoteHolder.innerHTML = data[0].text
// });


function getQuote() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:



      const quoteHolder = document.querySelector("h2[data-quote]")


      var json = JSON.parse(xhttp.responseText)

      // quoteHolder.innerHTML = json[0].text 

      let count = 0;
      document.querySelector("button").addEventListener("focus", function (e) {
        if (count < 1) {
          playMessage(json[0].text, 'en-GB')
          count++
        }
      })

      document.querySelector("button").addEventListener("blur", function (e) {
        window.speechSynthesis.cancel();
        count--
      })

    }
  };
  xhttp.open("GET", "https://type.fit/api/quotes", true);
  xhttp.send();

}


function playMessage(message, locale) {
  var msg = new SpeechSynthesisUtterance(message);
  msg.text = message;
  msg.volume = 1; // 0 to 1
  msg.rate = 1; // 0.1 to 9
  msg.pitch = 1; // 0 to 2, 1=normal
  msg.lang = locale; //"en-US";
  window.speechSynthesis.speak(msg);
}

getQuote()