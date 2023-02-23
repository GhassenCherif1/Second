let difficulty=prompt("Difficulty: ");
let number=Math.round(Math.random()*10)
let tentative=0
if (difficulty=="easy"){
tentative=5
}
else if(difficulty=="medium"){
tentative=3
}
else if (difficulty=="hard")
{
    tentative=1
}
var i=0
for(i=0;i<tentative;i++)
{
    let input=prompt("Please enter a number : ")
    if (input==number)
    {
        alert("Congratulations! You have successfully guessed the number " + input )
     i=tentative+1;
    }
}
if (i==tentative)
{
    alert("You have lost the game! the number was " + number)
}