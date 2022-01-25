

accedi.addEventListener('click',
    function(){

        const accessi = ['Mariorossi@gmail.com', 'fede_Verdi@gmail.com', 'MarinaVanni89@libero.it','roberto-Bianchi@virgilio.it'];
        let bool = false;
        const accedi = document.getElementById('accedi');
        let mail = document.getElementById('mail').value;
        let password = document.getElementById('password').value;
        let name = document.getElementById('name').value;


        for(let i=0; i<accessi.length; i++){

            if(accessi[i].toLocaleLowerCase() == mail.toLocaleLowerCase()){
                bool = true;
            } 
        }
        
       if (bool == true){
           document.getElementById('result').innerHTML = 'Bentornato ' + name;
           document.getElementById('result').style.color = "#fff";
       }
       else if(mail == ""|| password== "" || name==""){
        alert('Riempi i campi');
         }
       else{
           document.getElementById('result').innerHTML = name + ', mi dispiace ma non sei in lista.';
           document.getElementById('result').style.color = "red";
       }
    }
)

