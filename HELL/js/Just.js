

    function trig() {
        if (confirm("Do you want to hear background music? Press Ok for yes.") == true) {
            var justice = new Audio("../js/Justice.mp3");
            justice.play();
            console.debug("boom");
        }
        else {
            alert("Too bad");
            justice.play();
            console.debug("boom");
        }
    }
