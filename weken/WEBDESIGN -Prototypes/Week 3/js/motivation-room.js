

if(window.fetch){
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


function getQuote(){
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:



       const quoteHolder = document.querySelector("h2[data-quote]")
    console.log(xhttp.responseText)

    var json = JSON.parse(xhttp.responseText)

        quoteHolder.innerHTML = json[0].text 
      
  
    }
};
xhttp.open("GET", "https://type.fit/api/quotes", true);
xhttp.send();

}

getQuote()