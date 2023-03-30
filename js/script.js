const container = document.querySelector('.container');
console.log(container);

//collegare il bottone
const playBtn = document.getElementById('play')
const select = document.querySelector('#levels');



//funzione bottone
playBtn.addEventListener('click', function() {
  console.log(playBtn.value);
  

  // eliminare tutti gli elementi con classe .box
  container.innerHTML = '';

  for (let i = 1; i <= select.value; i++) {
    let boxes = document.createElement('div');
    boxes.classList.add('box');
    // boxes.classList.add('d-none');
    container.appendChild(boxes);
    
    console.log(boxes);
    
    boxes.append(i)
  
    boxes.addEventListener('click', function (){
    boxes.classList.toggle('sky-blue');
    console.log('hai cliccato sul numero' +  (i))


})
  

//modifico la misura delle caselle a seconda del livello
if (select.value === '81') {
    boxes.classList.add('intermediate')
  }else if(select.value === '49'){
    boxes.classList.add('difficult')
  }
}
}) 

//creo un array per inserire le bombe
let bombs = [];
numBombs = 16;

//funzione bombe
function generateBombs(min,max) {
  while (bombs.length < numBombs) {
    const newBomb = Math.floor(Math.random() * max) + 1;
    if (!bombs.includes(newBomb)){ 
      bombs.push(newBomb);
    }
    
  }console.log(bombs)
} 


