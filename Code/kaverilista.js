
const kaverilista = document.getElementById("kaverilista");



/* prompt loop */
let nameLoop = 0;
let names = [];


function namePrompt() {
    
    
    while(nameLoop < 10){
        names.push(prompt("Kerro kymmenen kaverin nimet"));
        nameLoop++;
    }

    //for loopilla nimet consoliin!

}


