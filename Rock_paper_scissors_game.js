//Register a key up listener on the document
    document.addEventListener("keyup", logkey, false);
//function the user presses a key
    function logkey(event)
    //store user's guess in variable
    var user_score = 0
    //generate random guess
    var comp_answer = (Math.random() * 3);
    //r=1 p=2 s=3
// if user picks rock and comp picks paper then comp wins

    //add 1 to comp score
// if user picks rock and comp picks scissor then user wins 
    // add 1 to user score
// if user picks scissor and comp picks rock then comp wins
    //add 1 to comp score
//if user picks scissor and comp picks paper then user wins
    //add 1 to user score
//if user picks paper and comp picks scissor then comp wins
    //add 1 to comp score
//if user picks paper and comp picks rock then user wins
    //add 1 to user score




