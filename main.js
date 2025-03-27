
/* globale Variablen / Arrays */
let originalText = "";
let userShift;
let encryptedText = "";
const alphabet_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.getElementById('button').addEventListener('click', function(){
    saveUserInputs();
    verschiebungAusgeben();
    originalTextAusgeben();
    textVerschluesseln();
    verschluesseltenTextAusgeben();
});

encryptedText = textVerschluesseln();

/* ------------ Funktionen ------------ */


function saveUserInputs(){
    originalText = document.getElementById('text_input').value;
    userShift = (document.getElementById('shift_input').value) % 26;
}


function verschiebungAusgeben(){
    const ueberschrift_shift = document.createElement("h1");
    ueberschrift_shift.textContent = "Shift:";
    ueberschrift_shift.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_shift);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = userShift;
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
    const verschluesselterText_array = [];
    let counter = 0;
    const split_array = originalText.split("");
    
    while (counter < split_array.length) {
        const shift = (userShift + alphabet_array.indexOf(split_array[counter])) % 26;

        if (alphabet_array.includes(alphabet_array[shift])){
            console.log(alphabet_array[shift]);
        }

        counter++;
    }
}


function verschluesseltenTextAusgeben(){
    const ueberschrift_encrypted = document.createElement("h1");
    ueberschrift_encrypted.textContent = "Verschlüsselter Text:";
    ueberschrift_encrypted.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_encrypted);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = encryptedText;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}

