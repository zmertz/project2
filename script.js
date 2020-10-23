
document.getElementById("wordSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("wordInput").value;
  if (value === "")
    return;
  console.log(value);

const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + value +"?key=a602b4de-4d3e-41a0-b801-576f797b35bf"
fetch(url)
.then(function(response) {
      return response.json();
    }).then(function(json) {
       let results = "";
       console.log(json[0]);
      results += '<h2>Word: ' + value + "</h2>";
      for(i of json) {
        results += "<div class = \"items\">"
        results += '<p>Type: ' + i.fl + "</p>";
        results += '<p>Definition: ' + i.shortdef + "</p>";
        results += "</div>"
      }
      document.getElementById("wordResults").innerHTML = results;
    });
  });
