

const btnjeu = document.querySelectorAll(".btn-jeu");


for (let i = 0; i < btnjeu.length; i++) {

  btnjeu[i].addEventListener('click', function() {
    const joueur = btnjeu[i].innerHTML;
    const robotrandom = btnjeu[Math.floor(Math.random() * btnjeu.length)].innerHTML;
    let result = "";
    
    if (joueur===robotrandom) {
      result = "Egalité";
    }
    else if ((joueur === "Pierre" && robotrandom === "Ciseaux") || (joueur === "Ciseaux" && robotrandom === "Feuille") || (joueur === "Feuille") && (robotrandom === "Pierre")) {
      result = "Gagné";
    }
    else {
      result = "Perdu";
    }
  document.querySelector(".result").innerHTML = `
  <div class="flex-joueur">
        <div>
            <p>Joueur</p>
            <p id="choix">${joueur}</p>
        </div>
        <div>
        <img src="./icons8-competition-64.png" alt="">
    </div>
        <div>
            <p>Ordinateur</p>
            <p id="choix">${robotrandom}</p>
        </div>
        
    </div>

    <div class="resultat">
    <div class="box-resultat">
    <img src="./icons8-conte-de-fée-48.png" alt="">
    ${result}
    </div>
    </div>
`  ;
    
  });
  
  
}




 
 
  