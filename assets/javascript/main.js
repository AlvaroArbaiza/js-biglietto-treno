/*

- Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
- Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
    - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    - va applicato uno sconto del 20% per i minorenni
    - va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/


function myFunction() { 

    // chilometri
    let chilometri = document.getElementById("chilometri").value;

    // età
    let eta = document.getElementById("eta").value;

    // tariffa in base al numero di chilometri
    const tariffa = 0.21;

    // prezzo totale
    let prezzoTotale = tariffa * chilometri;

    // sconto del 20%
    if ( eta < 18 ) {

        prezzoTotale = prezzoTotale * 0.2;

    // sconto del 40%
    } else if ( eta > 65 ) {

        prezzoTotale = prezzoTotale * 0.4;

    } else { 
        prezzoTotale = prezzoTotale;
    }

    // Inserimento dei dati nell'output
    document.getElementById("prezzoFinale").innerHTML = "Il prezzo del biglietto è: " + prezzoTotale.toFixed(2) + "&#8364;";

    console.log(prezzoTotale);

}

/* 
    preventDefault() per evitare il caricamento della pagina ogni volta che si chiama la funzione myFunction()
*/
document.getElementById("button-form").addEventListener("click", function(event){
        event.preventDefault()
    });
