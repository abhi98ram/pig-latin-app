let ServerURL = '	https://api.funtranslations.com/translate/pig-latin.json';
let inputText = document.querySelector('#txt-input');
let btnTranslate = document.querySelector('#btn-translate');
let outputText = document.querySelector('#txt-output');

function constructURL(fetchedText) {
    return ServerURL +'?'+'text='+fetchedText
}

function errorHandler(error) {
    alert('Error occured' + error);
}
function clickEventHandler() {
    let text = inputText.value;
    fetch(constructURL(text))
        .then(response => response.json())
        .then( json => {
            let data = json.contents.translated
            outputText.innerHTML = data;
        })
    .catch(errorHandler)
}
btnTranslate.addEventListener('click', clickEventHandler);