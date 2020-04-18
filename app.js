/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, randomScore, activePlayer, isGameOver, isEntered, val;

init();

/* var x = document.querySelector('#score-0').textContent;
console.log(x); */

document.querySelector('.submit').addEventListener('click', function() {
    if(isEntered === false) {
        
        val = parseInt(document.querySelector('.box'). value, 10);
        console.log(typeof val);
        if (val === 0){
            isEntered = false;
           document.querySelector('.zeroscore').style.display = 'block';
        }
        else {
           isEntered = true;
          document.querySelector('.zeroscore').style.display = 'none';
          document.querySelector('.play').style.display = 'block';
        }
    }
    
});  



document.querySelector('.btn-roll').addEventListener('click', function() {
    if (isGameOver === false && isEntered === true) {
        // Generate random number
        var dice = Math.floor(Math.random() * 6) + 1;
    
        //select the correct dice image
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        //lets play tag to vanish
        document.querySelector('.zeroscore').style.display = 'none';
        document.querySelector('.play').style.display = 'none';
    
        if(dice != 1)
        {    // change the current score
             randomScore += dice;
             document.getElementById('current-' + activePlayer).textContent = randomScore;
         
        }
        else {  
            nextPlayer();
        
        }
    }
    
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (isGameOver === false && isEntered ===true) {
        scores[activePlayer] += randomScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        if (scores[activePlayer] >= val)
        {
            document.getElementById('name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            
            document.querySelector('.dice').style.display = 'none';
            isGameOver = true;

            document.querySelector('.gameover').style.display = 'block';
            
            document.querySelector('.fname').style.display = 'none';
            document.querySelector('.box').style.display = 'none';
            document.querySelector('.submit').style.display = 'none';
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
        }
    else nextPlayer();
    }
    


});

function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.querySelector('.dice').style.display = 'none';
        randomScore = 0;
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    isGameOver = false;
    isEntered = false;
    scores = [0, 0];
    randomScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');

    document.querySelector('.box').value = 0;
    document.querySelector('.zeroscore').style.display = 'none';
    document.querySelector('.gameover').style.display = 'none';

    document.querySelector('.fname').style.display = 'block';
    document.querySelector('.box').style.display = 'block';
    document.querySelector('.submit').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.play').style.display = 'none';

    
}


document.querySelector('.btn-info').addEventListener('click',function() {
    alert('GAME RULES:\n- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn\n- The player can choose to \'Hold\', which means that his ROUND score gets added to his GLOBAL score. After that, it\'s the next player\'s turn\n- The first player to reach the MAX points on GLOBAL score wins the game');
});
