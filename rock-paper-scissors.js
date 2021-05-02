if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready)
}
else
{
    ready();
}


function ready()
{

    // Create an object that'll store the number of wins, losses, and draws, respectively.
    const scoreboard = 
    {
        wins = 0,
        losses = 0,
        draws = 0
    };

    /*
        Add an event listener to each of the choices that'll pass a respective string
        value to evaluateChoice(playerChoice).
    */
    document.querySelector(".rock-img").addEventListener("click", evaluateChoice("rock", scoreboard));
    document.querySelector(".paper-img").addEventListener("click", evaluateChoice("paper", scoreboard));
    document.querySelector(".scissors-img").addEventListener("click", evaluateChoice("scissors", scoreboard));
}


function evaluateChoice(playerChoice, scoreboard)
{
    // Create a variable that'll store the cpu's choice.
    let cpuChoice = generateCPUChoice(); // Stores "rock", "paper", or "scissors"

    // Evaluate whether both choices result in the player winning, losing, or drawing.
    switch (playerChoice)
    {
        case "rock":
            if (cpuChoice === "rock")
            {
                // Increase the number of draws by 1 and render it on the webpage.
                scoreboard.draws = scoreboard.draws + 1;
                document.querySelector(".draws-number").innerText = scoreboard.draws;
            }
            else if (cpuChoice === "paper")
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal();
                */
                scoreboard.losses = scoreboard.losses + 1;
                document.querySelector(".losses-number").innerText = scoreboard.losses;

                if (scoreboard.losses === 10)
                {
                    renderLossModal();
                }
            }
            else // cpuChoice === "scissors"
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal();
                */
                    scoreboard.wins = scoreboard.wins + 1;
                    document.querySelector(".wins-number").innerText = scoreboard.wins;
    
                    if (scoreboard.wins === 10)
                    {
                        renderWinModal();
                    }
            }
            break;

        case "paper":
            if (cpuChoice === "rock")
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal();
                */
                    scoreboard.wins = scoreboard.wins + 1;
                    document.querySelector(".wins-number").innerText = scoreboard.wins;
    
                    if (scoreboard.wins === 10)
                    {
                        renderWinModal();
                    }
            }
            else if (cpuChoice === "paper")
            {
                // Increase the number of draws by 1 and render it on the webpage.
                scoreboard.draws = scoreboard.draws + 1;
                document.querySelector(".draws-number").innerText = scoreboard.draws;
            }
            else // cpuChoice === "scissors"
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal();
                */
                    scoreboard.losses = scoreboard.losses + 1;
                    document.querySelector(".losses-number").innerText = scoreboard.losses;
    
                    if (scoreboard.losses === 10)
                    {
                        renderLossModal();
                    }
            }
            break;
            
        case "scissors":
            if (cpuChoice === "rock")
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal();
                */
                    scoreboard.losses = scoreboard.losses + 1;
                    document.querySelector(".losses-number").innerText = scoreboard.losses;
    
                    if (scoreboard.losses === 10)
                    {
                        renderLossModal();
                    }
            }
            else if (cpuChoice === "paper")
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal();
                */
                    scoreboard.wins = scoreboard.wins + 1;
                    document.querySelector(".wins-number").innerText = scoreboard.wins;
    
                    if (scoreboard.wins === 10)
                    {
                        renderWinModal();
                    }
            }
            else // cpuChoice === "scissors"
            {
                // Increase the number of draws by 1 and render it on the webpage.
                scoreboard.draws = scoreboard.draws + 1;
                document.querySelector(".draws-number").innerText = scoreboard.draws;
            }
            break;
    }
}


function generateCPUChoice()
{
    switch (Math.floor(Math.random() * 3) + 1)
    {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}


function renderWinModal()
{
    // Create a variable that'll store the modal div.
    const modal = document.querySelector(".modal");

    // Render the win modal.
    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2></h2>
        </div>
        <div class="modal-body">
            <p>
                
            </p>
        </div>
        <div class="modal-footer">
            <button id="play-again-btn" class="btn modal-btn">Start Game</button>
        </div>
    </div>`;
}


function renderLossModal()
{
    // Create a variable that'll store the modal div.
    const modal = document.querySelector(".modal");

    // Render the loss modal.
    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <span class="close">&times;</span>
            <h2></h2>
        </div>
        <div class="modal-body">
            <p>
                
            </p>
        </div>
        <div class="modal-footer">
            <button id="play-again-btn" class="btn modal-btn">Start Game</button>
        </div>
    </div>`;
}


function resetScoreboard()
{
    //
}