const game = document.getElementById('game');

game.addEventListener('click',
    function(){

        let player1 = document.getElementById('player1').value;
        let player2 = document.getElementById('player2').value;

        document.getElementById('user').innerHTML = "Numero " + player1 + ": "  + Math.floor(Math.random()*6);
        document.getElementById('computer').innerHTML = "Numero "+ player2 + ": " + Math.floor(Math.random()*6);

     if(player1 > player2){
         document.getElementById('result').innerHTML= "ha vinto " + player1;
     }
     else if(player1 == player2){
        document.getElementById('result').innerHTML= "Pareggio";
     }
     else{
        document.getElementById('result').innerHTML= "ha vinto " + player2;
     }

    }
)