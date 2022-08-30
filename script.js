var playDiv = document.getElementById('play');
var resultDiv = document.getElementById('result');
var p1NameDiv = document.getElementById('p1Name');
var p2NameDiv = document.getElementById('p2Name');
var p1HealthDiv = document.getElementById('p1Health');
var p2HealthDiv = document.getElementById('p2Health');
var announcementDiv = document.getElementById('announcements');

//global variable for simulation function
var isGame = true;

if(isGame){
//player 1 attack
document.addEventListener('keydown', function(e){
  if(!isGame){
    return;
  }
  let enemyHealth = Number(p2HealthDiv.innerText);
  if(enemyHealth>0){
   if(e.key == 'q'){
      document.getElementById('p1attack').play();
      let damage = Math.ceil(Math.random()*20);
      if(enemyHealth-damage<0){
        enemyHealth = 0;
      }
     else{
       enemyHealth -= damage;
     }
      p2HealthDiv.innerText = String(enemyHealth);

      if(enemyHealth == 0){
       endGame(p1HealthDiv, p2HealthDiv);
      }
    } 
  }
});

//player 1 heal
document.addEventListener('keydown', function(e){
  if(!isGame){
    return;
  }
  //convert html text to num and populate variable
  var playerHealth = Number(p1HealthDiv.innerText);
    if(playerHealth<100){
      if(e.key == 'a'){
        document.getElementById('p1heal').play();
        let heal = Math.ceil(Math.random()*20);
        if(playerHealth+heal>100){
          playerHealth = 100;
        }
        else{
          playerHealth += heal;
        }
        p1HealthDiv.innerText = String(playerHealth); 
      }
    }
});

//player 2 attack
 document.addEventListener('keydown', function(e){
   if(!isGame){
    return;
  }
  let enemyHealth = Number(p1HealthDiv.innerText);
  if(enemyHealth>0){
   if(e.key == 'p'){
      document.getElementById('p2attack').play();
      let damage = Math.ceil(Math.random()*20);
      if(enemyHealth-damage<0){
        enemyHealth = 0;
      }
     else{
       enemyHealth -= damage;
     }
      p1HealthDiv.innerText = String(enemyHealth);

     if(enemyHealth == 0){
       endGame(p1HealthDiv, p2HealthDiv);
     }
    } 
  }
  
 });

//player 2 heal
document.addEventListener('keydown', function(e){
  if(!isGame){
    return;
  }
  //convert html text to num and populate variable
  var playerHealth = Number(p2HealthDiv.innerText);
    if(playerHealth<100){
      if(e.key == 'l'){
        document.getElementById('p2heal').play();
        let heal = Math.ceil(Math.random()*20);
        if(playerHealth+heal>100){
          playerHealth = 100;
        }
        else{
          playerHealth += heal;
        }
        p2HealthDiv.innerText = String(playerHealth); 
      }
    }
  
});
}

endGame = (p1, p2)=>{
  if(Number(p1.innerText)>0){
    announcementDiv.innerText = 'Player 1 is Victorious!';
  }
  else if(Number(p2.innerText)>0){
    announcementDiv.innerText = 'Player 2 is Victorious!';
  }
  isGame = false;
}

 //reset game
document.getElementById("reset").addEventListener("click", () => {
  p1HealthDiv.innerText = '100';
  p2HealthDiv.innerText = '100';
  announcementDiv.innerText = '';
  isGame = true;
})

//simulate game
document.getElementById("play").addEventListener("click", ()=>{
  while(isGame){
    //player 1 attacks
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'q'}));
    //player 2 attacks
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'p'}));
     //player 1 heals
    if(Number(p1HealthDiv.innerText) != 0){
     document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'a'})); 
    }
    //player 2 heals
    if(Number(p2HealthDiv.innerText) != 0){
     document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'l'})); 
    }
  }
});