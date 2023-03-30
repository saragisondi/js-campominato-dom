const container = document.querySelector('.container');
console.log(container);
//collegare il bottone
const playBtn = document.getElementById('play')
const select = document.querySelector('#levels');
let numCell = 100;
const numBombs = 16;

const text = document.querySelector('.text')

const bombsArray =[];

//message
const messageWinner = 'Hai Vinto!'

const messageLooser = 'Hai Perso!'

//funzione bottone
playBtn.addEventListener('click', function() {
  

  // eliminare tutti gli elementi con classe .box
  container.innerHTML = '';

  for (let i = 1; i <= select.value; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box');
    boxes._Idn= i;
    // boxes.classList.add('d-none');
    container.appendChild(boxes);

    boxes.append(i)
    
    boxes.addEventListener('click', function (){
    console.log(this._Idn)
    boxes.classList.toggle('sky-blue');
    console.log(boxes)

   // se l'id della casella che ho cliccato corrisponde a uno dei numeri del bombs array significa che ho perso

    if (bombs.includes(this._Idn)) {
    console.warn('hai preso una bomba');
    boxes.classList.toggle('red');
    text.append(messageLooser)
  }
  

    
})
  

//modifico la misura delle caselle a seconda del livello
if (select.value === '81') {
    numCell = 81;
    boxes.classList.add('intermediate')
  }else if(select.value === '49'){
    numCell = 49;
    boxes.classList.add('difficult')
  }

        
  
}
}) 

//creo un array per inserire le bombe
let bombs = generateBombs(1, numCell);



//funzione bombe
function generateBombs(min, max)
{
  const bombsArray = [];
  const numBombs = 16;
  while (bombsArray.length < numBombs) {
    const newBomb = Math.floor(Math.random() * max) + 1;
    if (!bombsArray.includes(newBomb)){ 
      bombsArray.push(newBomb);
    }
    
  }

    

   console.log(bombsArray)
  return bombsArray;

  
} 


  
  