const kaverilista = document.getElementById("kaverilista");

/* prompt loop */

let nameLoop = 0;
let names = [];

function namePrompt() {
  while (nameLoop < 10) {
    names.push(prompt("Kerro kymmenen kaverin nimet"));
    nameLoop++;
  }
  for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // tässä on ongelma miten saada consoleen ilman logia???
  }
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(.value); //Tässä on ongelma
  newLi.appendChild(liContent);
  kaverilista.appendChild(newLi);
}
