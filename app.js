var btnTranslate = document.querySelector("#translation-button");
var translationText = document.querySelector("#translation-input");
var outputText = document.querySelector("#translation-output");
var btnPlay = document.querySelector("#translation-button-speak");

var res = "https://api.funtranslations.com/translate/minion.json";
var URL = encodeURI(res);
//var URL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationalURL(text) {
  return URL + "?" + "text=" + text;
}

function errorHandler(err) {
  console.log("error occurred" + err);
  alert("something wrong with the server! try again after some time");
}

function textSpeak(text) {
  responsiveVoice.speak(text, "Italian Female");
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
  translationText.value = "";
}

btnPlay.addEventListener("click", () => {
  textSpeak(outputText.innerText);
});

btnTranslate.addEventListener("click", clickHandler);
