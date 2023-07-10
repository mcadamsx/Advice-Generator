const dice = document.getElementById("dice");
const number = document.getElementById("number");
const advice = document.getElementById("advice");

let numbers = 117;

 dice.addEventListener('click', ()=>{

     
         numbers++;         
         number.innerHTML = numbers;
         advice.innerHTML ='"'+ random +'"';
 })

  
 dice.addEventListener('click', ()=>{

     fetch('https://api.quotable.io/random')
     .then(response => {
         return response.json ();
     })

     .then (random => {
         advice.innerHTML = `${'"'+ random.content + '"'}`;
         numbers++;
         number.innerHTML = numbers;
        
     })
    

     
    
 });

