
/* globale Variablen / Arrays */
let originalText;
let eingegebeneVerschiebung;
let verschluesselterText;
const alphabet_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const splittedIntoCharacters_array = [];

document.getElementById('button').addEventListener('click', function(){
    //elementeLoeschen()
    saveUserInputs();
    verschiebungAusgeben();
    originalTextAusgeben();
    textVerschluesseln();
    verschluesseltenTextAusgeben();
});

verschluesselterText = textVerschluesseln();

/* ------------ Funktionen ------------ */


function saveUserInputs(){
    originalText = document.getElementById('text_input').value;
    eingegebeneVerschiebung = (document.getElementById('shift_input').value) % 25;
}


function verschiebungAusgeben(){
    const ueberschrift_shift = document.createElement("h1");
    ueberschrift_shift.textContent = "Shift:";
    ueberschrift_shift.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_shift);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = eingegebeneVerschiebung;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}


function originalTextAusgeben(){
    const ueberschrift_original = document.createElement("h1");
    ueberschrift_original.textContent = "Original-Text:";
    ueberschrift_original.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_original);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = originalText;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}


function textVerschluesseln(){
    //const verschluesselterText_array = [];
    let counter = 0;
    const split_array = originalText.split("");

    
    
    
    while (counter < split_array.length) {
        const shift = eingegebeneVerschiebung + alphabet_array.indexOf(split_array[counter]);
        console.log(alphabet_array[shift]);
        counter++;
    }

      
}


function verschluesseltenTextAusgeben(){
    const ueberschrift_encrypted = document.createElement("h1");
    ueberschrift_encrypted.textContent = "Verschlüsselter Text:";
    ueberschrift_encrypted.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_encrypted);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = verschluesselterText;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}

