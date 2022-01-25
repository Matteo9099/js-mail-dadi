const accessi = ['mario','fabio','luca','silvia'];
const mail = prompt('Inserisci email');

for(let i=0; i<accessi.length; i++){

    if(accessi[i].toUpperCase() == mail.toUpperCase()){
        document.getElementById('result').innerHTML = 'Bentornato ' + mail;
        console.log(accessi[i]);
    } 
    else{
        document.getElementById('result').innerHTML = 'Accesso negato.';
    }
} 

