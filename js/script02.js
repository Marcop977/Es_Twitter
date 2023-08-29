const messaggio = document.querySelector("#messaggio");
const caratteri = document.querySelector("#caratteri");
const btn = document.querySelector("#btn");
const demo = document.querySelector("#demo");
const benvenuto = document.querySelector("#benvenuto");

const utenteJSON = localStorage.getItem("utente");
const utenteObj = JSON.parse(utenteJSON);
benvenuto.textContent = "Benvenuto " + utenteObj.username;

messaggio.addEventListener("input", contaCaratteri);
btn.addEventListener("click", visualizzaMessaggio);

function contaCaratteri(){
    const messaggioVal = messaggio.value;
    const caratteriDisponibili = 280;
    const caratteriRimanenti = caratteriDisponibili - messaggioVal.length;
    caratteri.textContent = caratteriRimanenti; 
}

function Utente(username, password, avatar){
    this.username = username;
    this.password = password;
    this.avatar = avatar;
    this.messaggi = [];
}

function Messaggio(testo, data){
    this.testo = testo;
    this.data = data;
}

const utente1 = new Utente("Mariorossi", "Mario123?", "BladeRunner");

function visualizzaMessaggio(){
    const messaggioOgg = new Messaggio(messaggio.value, new Date());
    utente1.messaggi.push(messaggioOgg);
    creaMessaggio(utente1, messaggioOgg);
}

function creaMessaggio(utente, messaggioOggetto){
    const li = document.createElement("li");
    li.innerHTML = `
        <img src="./img/${utente.avatar}.jpg" alt="avatar" width=20>
        <strong>${utenteObj.username}</strong>
        <p>${messaggioOggetto.testo}</p>
        <p>${messaggioOggetto.data}</p>
    `;
    demo.appendChild(li);
}


