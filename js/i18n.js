
window.addEventListener('load', () => {
  localization();
});

function localization() {
  let lang = navigator.language.split("-")[0].toLocaleLowerCase();
  if (lang != "en" && lang != "fr") {
    lang = "en";
  }
  translate(lang);
}

function translate(lang) {
  console.log(lang);
  readJsonFile(`/js/i18n/${lang}.json`, (json) => {
    const data = JSON.parse(json);
    i18n.translator.add(data);
    printTranslate(data.values);
  });
}

function printTranslate(data){
  for(key in data){
    const elements = document.querySelectorAll("." + key);
    for(let i = 0; i < elements.length; i++){
      elements[i].innerHTML = data[key];
    }
  }
}

function readJsonFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  }
  rawFile.send(null);
}