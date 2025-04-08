
/* globale Variablen / Arrays */

let originalText;
let shift = 0;
let verschluesselterText;
const alphabet_small_array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabet_big_array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


document.getElementById('button').addEventListener('click', function(){
    saveUserInputs();
    // verschiebungAusgeben();
    originalTextAusgeben();
    textVerschluesseln();
    verschluesseltenTextAusgeben();
});


verschluesselterText += textVerschluesseln();
encryptedText = textVerschluesseln();


/* ------------ Funktionen ------------ */


function saveUserInputs(){
    originalText = document.getElementById('text_input').value;
    shift = parseInt((document.getElementById('shift_input').value));
    userShift = (document.getElementById('shift_input').value) % 26;
}

/*
function verschiebungAusgeben(){
    const ueberschrift_shift = document.createElement("h1");
    ueberschrift_shift.textContent = "Shift:";
    ueberschrift_shift.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_shift);

    const textAusgabefeld = document.createElement("p");
    textAusgabefeld.textContent = shift;
    textAusgabefeld.textContent = userShift;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}
    */


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

    const split_array = originalText.split("");
    let gimme_char = "";
    let text_im_aufbau = "";
    let current_char = "";
    let shifted_index;
    let index_in_alphabet;
    

    // Bei neg. Shift wird Wert pos. und die Abgleich-Alphabete umgedreht, dann regulärer Algorihmus möglich
    if (shift < 0) {
        shift *= -1;
        alphabet_small_array.reverse();
        alphabet_big_array.reverse();
    }

    // Iteration über jedes Element des Original-Textes
    for (let text_position = 0; text_position < split_array.length; text_position++){

        current_char = split_array[text_position]; // aktuelles Zeichen
        
        if (alphabet_small_array.includes(current_char)){

            // Index-Position im kl. Alphabet bestimmen
            index_in_alphabet = alphabet_small_array.indexOf(split_array[text_position]);

            // Index-Position um Shift-Wert verschieben
            shifted_index = (index_in_alphabet + shift) % 26;
            
            // verschobenen Buchstaben aus Alphabet ziehen
            gimme_char = alphabet_small_array[shifted_index];

            // neuen Buchstaben Ausgabe-String anfügen
            text_im_aufbau += gimme_char;


        } else if (alphabet_big_array.includes(current_char)){

            // Index-Position im gr. Alphabet bestimmen
            index_in_alphabet = alphabet_big_array.indexOf(split_array[text_position]);

            // Index-Position um Shift-Wert verschieben
            shifted_index = (index_in_alphabet + shift) % 26;

            // verschobenen Buchstaben in String-Variable speichern
            gimme_char = alphabet_big_array[shifted_index];
            
            // Buchstaben dem Ausgabetext-String anfügen
            text_im_aufbau += gimme_char;
        } 

        else {
            text_im_aufbau += current_char;
        }


    }

    console.log("Verschlüsselter Text: " + text_im_aufbau);
    return text_im_aufbau;
}


/*
function verschluesseltenTextAusgeben(){
    const ueberschrift_encrypted = document.createElement("h1");
    ueberschrift_encrypted.textContent = "Verschlüsselter Text:";
    ueberschrift_encrypted.id = "ueberschrift";
    document.getElementById('ergebnis_container').appendChild(ueberschrift_encrypted);

    const textAusgabefeld = document.createElement("p");

    textAusgabefeld.textContent = text_im_aufbau;
    textAusgabefeld.textContent = encryptedText;
    textAusgabefeld.id = "original_text";
    document.getElementById('ergebnis_container').appendChild(textAusgabefeld);
}
*/