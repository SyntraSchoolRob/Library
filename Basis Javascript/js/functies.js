function  wNaam() {
    var naam = prompt('Vul uw naam in:', 'uw naam');
    var weergave = 'De naam die u invoerde was: ' + naam;
    document.getElementById('divResult').innerHTML = weergave;
}

function toonVersie() {
    var browser = navigator.appName;
    var versie = navigator.appVersion;
    var tekst = 'U gebruikt ' + browser + ', versie: ' + versie;

    document.getElementById('divResult').innerHTML = tekst;
}