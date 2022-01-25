const game = document.getElementById('game');

game.addEventListener('click',
    function(){

        let player1 = document.getElementById('player1').value;
        let player2 = document.getElementById('player2').value;

       const dado1 = Math.floor(Math.random()* 6) +1;
       const dado2 = Math.floor(Math.random()* 6) +1; 

       document.getElementById('user').innerHTML= player1 +" lancia il dado... è uscito il numero:  " + dado1;
       document.getElementById('computer').innerHTML= player2 +" lancia il dado... è uscito il numero:  " + dado2;

     if(dado1 > dado2){
         document.getElementById('result').innerHTML= "ha vinto " + player1;
     }
      else if(dado1 < dado2){
         document.getElementById('result').innerHTML= "Ha vinto " + player2;
      }
     else{
        document.getElementById('result').innerHTML= "Pareggio";

       }

    }
)