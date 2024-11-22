let horn = Math.floor((Math.random() * 100) + 1);
        window.addEventListener("keydown", checkKeyPressed, false);
function checkKeyPressed(evt) {
    if (evt.keyCode == "73" && horn == 69 ) {
        window.location.href = "../LAYER1/DEATH/IDIOT.HTML";
    }
    if (evt.keyCode == "73" && horn == 73 ) {
        alert("SUDDEN CHEST PAIN");
        window.location.href = "../../WAKE.HTML";
    }
    
    if (evt.keyCode == "73" && horn != 69 ) {
        horn = Math.floor((Math.random() * 100) + 1);
        console.log("Ah... free at last. O Gabriel... now dawns thy reckoning, and thy gore shall glisten before the temples of man! Creature of steel, my gratitude upon thee for my freedom. But the crimes thy kind have committed against humanity are not forgotten! And thy punishment... is death!");
    }
}

            
    // I AM ME AND ME IS YOU.
    // COME PRAY DOWN TO REPENT FOR WHAT IS DUE, FROM THE DEATH OF A LOVER TO THE HORRORS YOU HAVE DONE. YOU TWO WILL NEVER REUNITE IN THE GREAT BEYOND.</a>");