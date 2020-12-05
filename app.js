var ServerURL = 'https://api.funtranslations.com/translate/pig-latin.json';
var inputText = document.querySelector('#txt-input');
var  btnTranslate = document.querySelector('#btn-translate');
var outputText = document.querySelector('#txt-output');

function constructURL(fetchedText) {
    return ServerURL +'?'+'text='+fetchedText
}

function errorHandler(error) {
    alert('Error occured' + error);
}
function clickEventHandler() {
    var text = inputText.value;
    fetch(constructURL(text))
        .then(response => response.json())
        .then( json => {
            var data = json.contents.translated
            outputText.innerHTML = data;
        })
    .catch(errorHandler)
}
btnTranslate.addEventListener('click', clickEventHandler);