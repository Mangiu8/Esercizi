// 1. funzione che genera la tabella con tutti i numeri
// 2. funzione che scrive i numeri (push in un array)
// 3. funzione (associata al bottone) che genera dei numeri randomi
// 4. funzione che aggiunge una class classList.add('highlight')
// 5. funzione che generale delle tabelline da 24
// funzioni vanno dichiarate e invocate
const numeriTotali = [];

for (var i = 1; i <= 90; i++) {
    numeriTotali.push(i) 
}
console.log(numeriTotali)


const createTable = function (){
    const container = document.getElementById("tableArea")
    container.style.width = "100%"
    for (let i = 0; i < numeriTotali; i++) {
        const celle = document.createElement('tr')
        const colonne = document.createElement('td')
        celle.appendChild(container)
        colonne.appendChild(celle)
    }
}
createTable()

function generaNumeroCasuale() {
    var numero = Math.floor(Math.random() * 91);
    return numero;
}
var pulsanteGeneraNumeri = document.getElementById("random");
    pulsanteGeneraNumeri.addEventListener("click", function() {
      var numeroGenerato = generaNumeroCasuale();
      var elementoNumeroGenerato = document.getElementById("numeroGenerato");
      elementoNumeroGenerato.textContent = "Numero Generato: " + numeroGenerato;
});

const checkNumber = function() {
    numeroEstratto = randomNumber()
    if(numeroEstratto === createTable){
      
    }
}