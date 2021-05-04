if (document.readyState === "loading")
{
    document.addEventListener("DOMContentLoaded", ready)
}
else
{
    ready();
}

/*
    Function ready() creates an object which stores the respective number of wins, losses, and draws.
    Also, it adds an event listener to each of the images which calls evaluateChoice(playerChoice, scoreboard)
    and passes "rock", "paper", or "scissors" depending on the image that's clicked.
    Precondition: The webpage's fully loaded.
    Postcondition: An object consisting of the respective number of wins, losses, and draws is created, 
    and an event listener to each of the images which calls evaluateChoice(playerChoice, scoreboard).
*/
function ready()
{

    // Create an object that'll store the number of wins, losses, and draws, respectively.
    const scoreboard = 
    {
        wins: 0,
        losses: 0,
        draws: 0
    };

    /*
        Add an event listener to each of the choices that'll pass a respective string
        value to evaluateChoice(playerChoice).
    */
    document.querySelector(".rock-img").addEventListener("click", () => {
        evaluateChoice("rock", scoreboard);
    });
    document.querySelector(".paper-img").addEventListener("click", () => {
        evaluateChoice("paper", scoreboard);
    });
    document.querySelector(".scissors-img").addEventListener("click", () => {
        evaluateChoice("scissors", scoreboard);
    });
}

/*
    Function evaluateChoice(playerChoice, scoreboard) calls generateCPUChoice() to select a random choice for
    the CPU and determines whether the player won, loss, or drawed that match. Also, it updates the scoreboard
    object and the one rendered on the webpage.
    Precondition: The player clicked one of the images.
    Postcondition: The scoreboard object and the one rendered on the webpage is updated. If the player has
    10 wins, then renderWinModal(scoreboard) is called. Else, renderLossModal(scoreboard) is called.
*/
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
                document.querySelector(".draws-number").innerText = "" + scoreboard.draws;
            }
            else if (cpuChoice === "paper")
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal(scoreboard);
                */
                scoreboard.losses = scoreboard.losses + 1;
                document.querySelector(".losses-number").innerText = "" + scoreboard.losses;

                if (scoreboard.losses === 10)
                {
                    renderLossModal(scoreboard);
                }
            }
            else // cpuChoice === "scissors"
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal(scoreboard);
                */
                scoreboard.wins = scoreboard.wins + 1;
                document.querySelector(".wins-number").innerText = "" + scoreboard.wins;

                if (scoreboard.wins === 10)
                {
                    renderWinModal(scoreboard);
                }
            }
            break;

        case "paper":
            if (cpuChoice === "rock")
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal(scoreboard);
                */
                scoreboard.wins = scoreboard.wins + 1;
                document.querySelector(".wins-number").innerText = "" + scoreboard.wins;

                if (scoreboard.wins === 10)
                {
                    renderWinModal(scoreboard);
                }
            }
            else if (cpuChoice === "paper")
            {
                // Increase the number of draws by 1 and render it on the webpage.
                scoreboard.draws = scoreboard.draws + 1;
                document.querySelector(".draws-number").innerText = "" + scoreboard.draws;
            }
            else // cpuChoice === "scissors"
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal(scoreboard);
                */
                scoreboard.losses = scoreboard.losses + 1;
                document.querySelector(".losses-number").innerText = "" + scoreboard.losses;

                if (scoreboard.losses === 10)
                {
                    renderLossModal(scoreboard);
                }
            }
            break;
            
        case "scissors":
            if (cpuChoice === "rock")
            {
                /*
                    Increase the number of losses by 1 and render it on the webpage.
                    If the # equals 10, call renderLossModal(scoreboard);
                */
                scoreboard.losses = scoreboard.losses + 1;
                document.querySelector(".losses-number").innerText = "" + scoreboard.losses;

                if (scoreboard.losses === 10)
                {
                    renderLossModal(scoreboard);
                }
            }
            else if (cpuChoice === "paper")
            {
                /*
                    Increase the number of wins by 1 and render it on the webpage.
                    If the # equals 10, call renderWinModal(scoreboard);
                */
                scoreboard.wins = scoreboard.wins + 1;
                document.querySelector(".wins-number").innerText = "" + scoreboard.wins;

                if (scoreboard.wins === 10)
                {
                    renderWinModal(scoreboard);
                }
            }
            else // cpuChoice === "scissors"
            {
                // Increase the number of draws by 1 and render it on the webpage.
                scoreboard.draws = scoreboard.draws + 1;
                document.querySelector(".draws-number").innerText = "" + scoreboard.draws;
            }
            break;
    }
}

/*
    Function generateCPUChoice() randomly returns "rock", "paper", or "scissors" for the CPU.
    Precondition: The player clicked one of the images.
    Postcondition: "rock", "paper", or "scissors" is randomly returned.
*/
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

/*
    Function renderWinModal(scoreboard) renders a modal telling the player that they won and adds
    an event listener to its button which calls resetScoreboard(scoreboard).
    Precondition: The player got 10 wins.
    Postcondition: a modal telling the player that they won is rendered and an event listener is added to 
    its button which calls resetScoreboard(scoreboard).
*/
function renderWinModal(scoreboard)
{
    // Create a variable that'll store the modal div.
    const modal = document.querySelector(".modal");

    // Render the win modal.
    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <a href="about.html" class="close">&times;</a>
            <h2>You Won!</h2>
        </div>
        <div class="modal-body">
            <p>
                Congrats on beating the CPU! Click the button below to play again, or
                click the close button above to load the About page. 
            </p>
        </div>
        <div class="modal-footer">
            <button id="retry-btn" class="btn modal-btn">Play Again</button>
        </div>
    </div>`;
    modal.style.display = "block";

    /*
        Add an event listener to the retry button that'll call resetScoreboard(scoreboard)
        and hide the modal.
    */
   document.querySelector("#retry-btn").addEventListener("click", () => {
       resetScoreboard(scoreboard);
       modal.style.display = "none";
   })
}

/*
    Function renderWinModal(scoreboard) renders a modal telling the player that they lost and adds
    an event listener to its button which calls resetScoreboard(scoreboard).
    Precondition: The player got 10 losses.
    Postcondition: a modal telling the player that they lost is rendered and an event listener is added to 
    its button which calls resetScoreboard(scoreboard).
*/
function renderLossModal(scoreboard)
{
    // Create a variable that'll store the modal div.
    const modal = document.querySelector(".modal");

    // Render the loss modal.
    modal.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <a href="about.html" class="close">&times;</a>
            <h2>You Lost...</h2>
        </div>
        <div class="modal-body">
            <p>
                Sorry for losing to the CPU :(. Click the button below to play again, or
                click the close button above to load the About page. 
            </p>
        </div>
        <div class="modal-footer">
            <button id="retry-btn" class="btn modal-btn">Play Again</button>
        </div>
    </div>`;
    modal.style.display = "block";

    /*
        Add an event listener to the retry button that'll call resetScoreboard(scoreboard)
        and hide the modal.
    */
   document.querySelector("#retry-btn").addEventListener("click", () => {
       resetScoreboard(scoreboard);
       modal.style.display = "none";
   })
}

/*
    Function resetScoreboard(scoreboard) sets each of the scoreboard object's values and the webpage's
    scoreboard to 0.
    Precondition: The player clicked a modal's retry buton.
    Postcondition: the scoreboard object's values and the webpage's scoreboard is set to 0.
*/
function resetScoreboard(scoreboard)
{
    // Set all the scoreboard object's values to 0.
    scoreboard.wins = 0;
    scoreboard.losses = 0;
    scoreboard.draws = 0;

    // Set the scores on the webpage to 0.
    document.querySelector(".wins-number").innerText = "0";
    document.querySelector(".losses-number").innerText = "0";
    document.querySelector(".draws-number").innerText = "0";
}