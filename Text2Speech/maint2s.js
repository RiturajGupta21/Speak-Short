// Adding the variables to use
let speakBtn, txtFld, speakerMenu, language,allVoices, langtags,rate,voiceIndex = 0;
// Fuction to intialize
function init(){
  speakBtn = document.querySelector("#speakBtn");
  txtFld = document.querySelector("#txtFld"); 
  speakerMenu = document.querySelector("#speakerMenu");
  language = document.querySelector("#language");
  rate = document.querySelector("#rate")
  langtags = getLanguageTags();
  speakBtn.addEventListener("click",talk,false);
  // event listener is call to selectSpeaker() whenever the speakerMenu changes.
  speakerMenu.addEventListener("change",selectSpeaker,false);
  if (window.speechSynthesis) {
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = setUpVoices;
    }
    setUpVoices();
  }else{
    speakBtn.disabled = true;
    speakerMenu.disabled = true;
  }
}
// gets an array of what are called SpeechSynthesisVoice objects by calling the getVoices() method of the speechSynthesis object.
function setUpVoices(){
  // To do this getAllVoices() method is used
  allVoices = getAllVoices();
  // calls a function to create the list of options that will appear in the #speakerMenu select element. 
  createSpeakerMenu(allVoices);
}
// speechSynthesis.getVoices() method sometimes returns duplicates in the list
function getAllVoices() {
  let voicesall = speechSynthesis.getVoices();
  let vuris = [];
  let voices = [];
// array will contain objects that look like the ones below. Each object has id, voiceURI, name, and lang attributes.
  voicesall.forEach(function(obj,index){
    let uri = obj.voiceURI;
    if (!vuris.includes(uri)){
      vuris.push(uri);
      voices.push(obj);
    }
  });
  voices.forEach(function(obj,index){obj.id = index;});
  return voices;
}
function createSpeakerMenu(voices){
  let code = ``;
  voices.forEach(function(vobj,i){
    code += `<option value=${vobj.id}>`;
    code += `${vobj.name} (${vobj.lang})`;
    code += vobj.voiceURI.includes(".premium") ? ' (premium)' : ``;
    code += `</option>`;
  });
  speakerMenu.innerHTML = code;
  speakerMenu.selectedIndex = voiceIndex;
}
//  The selectSpeaker() function stores the selectedIndex of the #speakerMenu select element. 
function selectSpeaker(){
  voiceIndex = speakerMenu.selectedIndex;
  let sval = Number(speakerMenu.value);
  // the value of the selected item which will be an integer that corresponds to the index of that voice in the allVoices() array.
  let voice = allVoices[sval];
  // he first two letters of the lang attribute (e.g. “en,” “es,” “ru,” “de,” “fr”) and use that code to search the langtags array of language objects to find the appropriate language name. 
  let langcode = voice.lang.substring(0,2);
  // The searchObjects() function returns an array that will likely have only one entry.
  let langcodeobj = searchObjects(langtags,"code",langcode);
  // the first entry (langcodeobj[0]) is only needed.
  language.innerHTML ="speaks in "+ langcodeobj[0].name;
}
// The FileReader API can be used to read a file asynchronously in collaboration with JavaScript event handling.
let readfile = document.getElementById('inputfile').addEventListener('change', function () {
    var fr = new FileReader();
    fr.onload = function () {
        document.getElementById('txtFld').textContent = fr.result;
    }
    // Reads the contents of the specified input file. The result attribute contains the contents of the file as a text string.
    fr.readAsText(this.files[0]);
})
// This function creates the instance of SpeechSynthesisUtterance object
function talk(){
  let sval = Number(speakerMenu.value);
  let u = new SpeechSynthesisUtterance();
  u.voice = allVoices[sval];
  u.lang = u.voice.lang;
  // adds the text from the <textarea>(using ID txtFld) to the text property.
  u.text = txtFld.value;
  u.rate =  Number(rate.value);
  // utterance is passed to the speechSynthesis method so we can hear the spoken text.
  // The specific voice you hear will vary by browser and operating system.
  speechSynthesis.speak(u);
}
// export {talk};
// function pause(){
  
// }
// a simple list of these codes and their corresponding languages and make an array of objects of the form
// utility function to help search an array of objects for the value of a given property.
// the language name that matches the language code of the selected voice is used
function getLanguageTags(){
  let langs = ["ar-Arabic","cs-Czech","da-Danish","de-German","el-Greek","en-English","eo-Esperanto","es-Spanish","et-Estonian","fi-Finnish","fr-French","he-Hebrew","hi-Hindi","hu-Hungarian","id-Indonesian","it-Italian","ja-Japanese","ko-Korean","la-Latin","lt-Lithuanian","lv-Latvian","nb-Norwegian Bokmal","nl-Dutch","nn-Norwegian Nynorsk","no-Norwegian","pl-Polish","pt-Portuguese","ro-Romanian","ru-Russian","sk-Slovak","sl-Slovenian","sq-Albanian","sr-Serbian","sv-Swedish","th-Thai","tr-Turkish","zh-Chinese"];
  let langobjects = [];
  for (let i=0;i<langs.length;i++){
    let langparts = langs[i].split("-");
    langobjects.push({"code":langparts[0],"name":langparts[1]});
  }
  return langobjects;
}

function searchObjects(array,prop,term,casesensitive = false){
  // Searches an array of objects for a given term in a given property
  // Returns an array of only those objects that test positive
  let regex = new RegExp(term, casesensitive ? "" : "i");
  let newArrayOfObjects = array.filter(obj => regex.test(obj[prop]));
  return newArrayOfObjects;
}
// An event listener to tell the document to wait until the DOM elements load before calling the init() function.
document.addEventListener('DOMContentLoaded', function (e) {
  try {init();} catch (error){
    console.log("Data didn't load", error);}
});

if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js").then(registration =>{
      console.log("SW Registered");
      console.log(registration);
  }).catch( error =>{
      console.log("SW Registered Failed");
      console.log(error);
  });
}