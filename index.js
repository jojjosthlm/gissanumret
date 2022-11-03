    let y = Math.floor(Math.random() * 100 + 1);
      
    let guess = 1;
      
    document.getElementById("submitguess").onclick = function(){
      
   // number guessed by user     
   let x = document.getElementById("guessField").value;
  
   if(x == y)
   {    
       alert("Grattis! Du gissade rätt, gång, "
               + guess);
   }
   else if(x > y) 
   
   {    
       guess++;
       alert("Ledsen, pröva en längre siffra");
   }
   else
   {
       guess++;
       alert("ledsen, gissa högre")
   }
}