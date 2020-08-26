/*Versio 1*/
const kaveriLista = document.getElementById("kaverilista");

let nameLoop = 0;
let names = [];

function namePrompt() {
  while (nameLoop < 10) {
    names.push(prompt("Kerro kymmenen kaverin nimet"));
    nameLoop++;
  }

  for (let i = 0; i < names.length; i++) {
    console.log(names[i]);

    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(names[i]);
    newLi.appendChild(liContent);
    kaveriLista.appendChild(newLi);
  }
}
/*Versio 2*/

const kaveriLista2 = document.getElementById("kaverilista2");
const listInput = document.getElementById("list-input");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");

addBtn.addEventListener("click", function() {
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput.value);
  newLi.appendChild(liContent);
  kaveriLista2.appendChild(newLi);
});


//ota inputin value ja jos se täsmää mikä on listassa olevaan se poistetaan poistonapista
removeBtn.addEventListener("click", function() {
  const nameToRemove = listInput.value.toLowerCase();
  const items = kaveriLista2.getElementsByTagName("li");

    Array.from(items).forEach(function(item){
      let itemName = item.firstChild.textContent;
      if ( itemName.toLowerCase().indexOf(nameToRemove) != -1) {
        console.log(itemName);
        kaveriLista2.removeChild(item);
      }
    });
});
