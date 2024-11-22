
    window.addEventListener("keydown", checkKeyPressed, false);

    function checkKeyPressed(evt) {
        if (evt.keyCode == "69") {
            let text;
            let text1;
            alert("I speak truths & You speak lies. Together we are human, apart we are suffering. Tell me, who's the liar?");
            let truth = prompt("Was it 'I' or 'You'", "[insert reference to Icarus & the sun]");
                switch(truth){
                    case "I":
                        alert("I speaks")
                        text = "I took her to somewhere nice. And by I, I meant her. She took me to a party. The area was just beautiful that I almost broke my gaze from her. It was just something about her that reeled me in. I never meant to hurt her. What I did was wrong. What I did was unforgivable. And as such I broke my own heart. For it was not my heart, but yours.";
                        break;

                    case "You":
                        alert("You speak")
                        text = "You see your honor, she did it to herself. Never did a thing to her. You'll see it in the evidence and witness statements. If you ask them, they are sure that it was the father that drugged and took advantage of her inhbriated state. Iiiagh *COGUH COUGH* was just a unprepared variable.... Your.... Your honor, I... my hear-";
                        break;
                        
                    case "Both":
                        alert("The Guilt speaks")
                        text = "OH SO YOU WANT MY STORY HUH? WELL HERE'S HOW IT WENT GOOD SIR. ABSOLUTE TRAGEDY! I SPOKE THE TRUTH, YOU WERE INDEED TAKEN TO HER PARTY. BUT YOU NEVER ASKED WHY SHE DID IT, ALL YOU WAS THINKING WAS THE ALIBI. YOU COLD HEARTED DISGUSTING MONSTER. IF YOU WERE A WOMAN YOU ARE VERY BRUTAL. FOR A MAN YOU SURE WERE MANIPULATIVE. SHE LIKED.. SHE LIKES US. IT'S ALL YOUR FAULT AND I AM GOING TO PAY FOR IT. NOT IN SOUL, BUT IN HEART. JUST CALL ME WHEN YOU WANT ME TO PAY THE DEBT AGAIN.";
                        break;

                        case "11 a minute":
                            alert("Did it say 'I saw you do it'?")
                            text = "Try again in another prompt you ex lover";
                            break;

                        default:
                        alert("INCORRECT YA DUNCE, IT'S ONE WORD. NOT SOMETHING LIkE 'IT WAS I' JUST 'I'. DON'T FORGET TO CAPITALIZE THE FIRST LETTER");
                        text = "Hell never speaks. It's all quiet. The voices you hear are of your own or that of others. Hell is nhilism rejected. But nothing is something. and as such it is Hell.";

                }
                document.getElementById("Fish").innerHTML = text;

                }
    }
    // I AM ME AND ME IS YOU.
    // COME PRAY DOWN TO REPENT FOR WHAT IS DUE, FROM THE DEATH OF A LOVER TO THE HORRORS YOU HAVE DONE. YOU TWO WILL NEVER REUNITE IN THE GREAT BEYOND.</a>");