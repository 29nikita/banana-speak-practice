var btnTranslate = document.querySelector("#translation-button");
var translationText = document.querySelector("#translation-input");
var outputText = document.querySelector("#translation-output");

var URL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationalURL(text) {
  return URL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("error occurred" + err);
}

function clickHandler() {
  var inputText = translationText.value;
  fetch(getTranslationalURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
