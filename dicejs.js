function roll()
{
    var x=Math.floor(Math.random()*6+1);
    var y=Math.floor(Math.random()*6+1);

     document.getElementById('im').src="file:///K:/DADDY%20Project/WEB/Projects/Dice%20Game/dice"+x+".png";
     document.getElementById('1').src="file:///K:/DADDY%20Project/WEB/Projects/Dice%20Game/dice"+y+".png";

     if(x>y)
     {
        document.getElementById('3').innerHTML="...Player 1 wins...";
     }
     else if(x<y)
     {
        document.getElementById('3').innerHTML="...Player 2 wins...";
     }
     else
     {
        document.getElementById('3').innerHTML="...It's a Tie...";
     }
}