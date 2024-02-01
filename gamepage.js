// generation of random value
var Y = Math.floor(Math.random() * 10 + 1);
// count of attempts
// until hit
player_name = localStorage.getItem("player_name");
var guess = 1;
// function for the number sent by the user
function submit(){
    var X = document.getElementById("guessField").value;
    if(X == Y){
        alert("CONGRATS!!! " + player_name + " GOT IT CORRECT!!! " + guess + " WAS THE ANSWER!");
        guess = 1;
    }

        else if(X > Y){
            guess++;
            alert("TRY A LOWER NUMBER");
        }

        else{
            guess++;
            alert("TRY A HIGHER NUMBER");
        }
    
}
function playAgain(){
    Y = Math.floor(Math.random() * 10 + 1);
}