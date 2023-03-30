CAMPO MINATO
=====

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.<br>
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. <br> Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. <br>
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. <br>
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. <br>
<br>
**BONUS:**
Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## STEPS

- Creo un array delle bombe;
- Creo un ciclo che mi confronta la lunghezza dell array con il numero delle bombe, crea una bomba con numerazione randomica e creo una condizione in cui se la nuova bomba non è inclusa nell array me la deve aggiungere;
- Creo delle costanti per il numero delle celle a seconda del livello selezionato;
- Do una custom proprieties ai boxes che hanno le bombe e gli dico che ogni volta che ci clicco sopra devono diventare rossi e mi deve stampare in pagina il testo : 'hai perso!'.