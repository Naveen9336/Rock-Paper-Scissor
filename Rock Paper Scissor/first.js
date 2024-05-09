let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log("game was drawn");
    msg.innerText="Game Was drawn";
    msg.style.backgroundColor = "black";
}
const showWinner = (userwin, userChoice, compChoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win")
        //msg.innerText="You Win";
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
    console.log("you lose");
    // compscore++;
    // compScorePara.innerText = compscore;
    compscore++;
    compScorePara.innerText = compscore;
    //msg.innerText = " You lose";
    //msg.innerText = `You lost! Your ${userChoice} beats ${compChoice}`;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    }

}
const genComputer = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice); 
    const compChoice = genComputer();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice==="paper"?false:true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice==="rock"?true:false;
        }
        else{
            userwin = compChoice==="rock"?false:true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });
});
