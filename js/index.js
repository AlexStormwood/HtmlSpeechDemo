const synth = window.speechSynthesis;
var voiceArray = [];
var selectedVoice = null;

function helloWorld(){
    sayCustomMessage("Hello world!");
}

function getAndSayCustomMessage(){
    let customTextMessage = document.getElementById("voiceMessageToSay");
    sayCustomMessage(customTextMessage.value);
}

function sayCustomMessage(customString){
    let messageToSay = new SpeechSynthesisUtterance(customString);
    if (selectedVoice){
        messageToSay.voice = selectedVoice;
    }
    synth.speak(messageToSay);
}

function getDeviceVoices(){
    voiceArray = synth.getVoices();
    // update dropdown list with voices
    var voiceDropdownElem = document.getElementById("voiceDropdown");
    voiceArray.forEach(voiceObj => {
        let voiceOption = document.createElement("option");
        voiceOption.value = voiceObj.name;
        voiceOption.innerText = voiceObj.name;
        voiceDropdownElem.appendChild(voiceOption);

    });
}

function showSelectedVoiceDetails(){
    var selectedVoiceDetailsUL = document.getElementById("selectedVoiceDetails");
    selectedVoiceDetailsUL.innerHTML = "";
    let nameLI = document.createElement("li");
    let langLI = document.createElement("li");

    var voiceDropdownElem = document.getElementById("voiceDropdown");
    selectedVoice = voiceArray[voiceDropdownElem.selectedIndex];

    nameLI.innerText = `Name: ${selectedVoice.name}`;
    langLI.innerText = `Language: ${selectedVoice.lang}`;

    selectedVoiceDetailsUL.appendChild(nameLI);
    selectedVoiceDetailsUL.appendChild(langLI);
}