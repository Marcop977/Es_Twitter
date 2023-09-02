const form = document.querySelector("#formReg");
const nome = document.querySelector("#nome");
const eta = document.querySelector("#eta");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const feed = document.querySelector("#feed");
const demo = document.querySelector("#demo");

form.addEventListener("submit", function(){
    controllaCampi();
    verificaUtente();
});

function controllaCampi(){
    feed.innerHTML = "";
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[$/()"!?\\*]).{8,20}$/;

    if(nome.value == "" && eta.value == "" && username.value == "" && password.value == ""){
        feed.innerHTML = `Non puoi lasciare i campi vuoti <br>`; 
        event.preventDefault();
    }else if(username.value.length < 8 || username.value.length > 15){
        feed.innerHTML += `L'username deve contenere min 8 e max 15 caratteri <br>`;
        event.preventDefault(); 
    }else if(nome.value == ""){
        feed.innerHTML += `Compila il campo nome <br>`;
        event.preventDefault(); 
    }else if(eta.value == ""){
        feed.innerHTML += `Compila il campo eta <br>`;
        event.preventDefault(); 
    }else if(username.value == ""){
        feed.innerHTML += `Compila il campo username <br>`;
        event.preventDefault(); 
    }else if(password.value == ""){
        feed.innerHTML += `Compila il campo password <br>`;
        event.preventDefault(); 
    }else if(!regex.test(password.value)){
        feed.innerHTML += `La password deve contenere:<br> - Almeno 1 lettera maiuscola<br> - Almeno 1 numero<br> - Almeno 1 carattere speciale fra $/()"!?\*`;
        event.preventDefault();
    }else{
        return true;
    }
}

function Utente(username, password){
    this.username = username;
    this.password = password;
}

const arrUtenti = [];

function verificaUtente(){   
    const esiste = arrUtenti.find(u => u.username === username.value);
    if(controllaCampi()){
        if(esiste){
            const passCorretta = arrUtenti.find(u => u.password === password.value);
            if(passCorretta){
                demo.textContent = "Utente trovato!";
            }else{
                demo.textContent = "Password errata.";
                event.preventDefault();
            }        
        }else{
            const nuovoUtente = {username: username.value, password: password.value};
            arrUtenti.push(nuovoUtente);
            const utenteJSON = JSON.stringify(nuovoUtente)
            localStorage.setItem("utente", utenteJSON);
            demo.textContent = "Nuovo utente creato! Clicca di nuovo su 'Login' per accedere."; 
            event.preventDefault(); 
        }        
    }
}


