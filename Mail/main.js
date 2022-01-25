const accessi = ['mario','fabio','luca','silvia'];
const mail = prompt('Inserisci email');
let condizione = false;

for(let i=0; i<accessi.length; i++){

     if(accessi[i] == mail){
         condizione = true;
         document.getElementById('result').innerHTML = 'Bentornato ' + mail;
     } 
}

 
if (condizione == true){
    document.getElementById('result').innerHTML = 'Bentornato ' + mail;
}
else{
    document.getElementById('result').innerHTML = 'Non presente';
    
}