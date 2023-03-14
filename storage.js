class User {
  constructor(name, surname, andress, state, region, province, city) {
    this.nome = name;
    this.cognome = surname;
    this.indirizzo = andress;
    this.stato = state;
    this.regione = region;
    this.provincia = province;
    this.paese = city;
  }
}

window.onload = () => {
  tastoSalva.onclick = salvaDati;
  tastoCancella.onclick = cancellaDati;

  ceckstorage()
};

let tastoCancella = document.querySelector(".cancella");
let tastoSalva = document.querySelector(".salva");
let display = document.querySelector(".display");
const STORAGE_KAY = "utente";

let salvaDati = function () {
  let nome = document.querySelector("#nome").value;
  let cognome = document.querySelector("#cognome").value;
  let indirizzo = document.querySelector("#indirizzo").value;
  let stato = document.querySelector("#stato").value;
  let regione = document.querySelector("#regione").value;
  let provincia = document.querySelector("#provincia").value;
  let paese = document.querySelector("#paese").value;

  let utente = new User(
    nome,
    cognome,
    indirizzo,
    stato,
    regione,
    provincia,
    paese
  );

  let stringaUtente = JSON.stringify(utente);

  localStorage.setItem(STORAGE_KAY, stringaUtente);
  ceckstorage()
};

let ceckstorage= function(){
    let localStorageCeck = localStorage.getItem(STORAGE_KAY);

    if(localStorageCeck){
        mostraDati()
    }else{
        let p = document.createElement('p')
        p.textContent= "NON TI SEI ANCORA REGISTRATO!!!"
        display.appendChild(p)
        
    }
}

let cancellaDati = function () {
    display.textContent=""
  localStorage.removeItem(STORAGE_KAY);
  ceckstorage()
};

let mostraDati = function () {
    display.textContent=" "

  let stringaStorage = localStorage.getItem(STORAGE_KAY);
  let oggettoStorage = JSON.parse(stringaStorage);

  let p1 = document.createElement("p");
  p1.classList.add("p-display");
  let p2 = document.createElement("p");
  p2.classList.add("p-display");
  let p3 = document.createElement("p");
  p3.classList.add("p-display");
  let p4 = document.createElement("p");
  p4.classList.add("p-display");
  let p5 = document.createElement("p");
  p5.classList.add("p-display");
  let p6 = document.createElement("p");
  p6.classList.add("p-display");
  let p7 = document.createElement("p");
  p7.classList.add("p-display");

  p1.textContent = `il tuo nome è: ${oggettoStorage.nome}`;
  p2.textContent = `il tuo cognome è: ${oggettoStorage.cognome}`;
  p3.textContent = `l'indirizzo di residenza è: ${oggettoStorage.indirizzo}`;
  p4.textContent = `lo stato di residenza è: ${oggettoStorage.stato}`;
  p5.textContent = `la regione di residenza è: ${oggettoStorage.regione}`;
  p6.textContent = `la provincia di residenza è: ${oggettoStorage.provincia}`;
  p7.textContent = `il paese di residenza è: ${oggettoStorage.paese}`;

  display.appendChild(p1);
  display.appendChild(p2);
  display.appendChild(p3);
  display.appendChild(p4);
  display.appendChild(p5);
  display.appendChild(p6);
  display.appendChild(p7);
};

// timer
let toastTarget = document.querySelector(".target-toast");
let cronometro = sessionStorage.getItem("tempo") || 0;

setInterval(() => {
  toastTarget.textContent = cronometro;
}, 1000);

setInterval(() => {
  cronometro++;
  sessionStorage.setItem("tempo", cronometro);
}, 1000);
