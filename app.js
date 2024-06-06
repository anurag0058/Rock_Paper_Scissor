let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice= ()=> {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const drawGame = ()=> {

    msg.innerText = "Game was draw!. Play again";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin,userChoice,compChoice)=> {
    if(userWin) {
        userscore++;
        userScorePara.innerText=userscore;
      
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        computerscore++;
        compScorePara.innerText=computerscore;
       
        msg.innerText = `You lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame=(userChoice)=> {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice =", compChoice);

    if(userChoice === compChoice) {
      drawGame();
    }else{
     let userWin = true;
     if(userChoice==="rock") {
            userWin = compChoice==="paper" ? false : true;
        }
     else if(userChoice==="paper"){
        userWin = compChoice==="scissor" ? false : true;
    }else {
        userWin = compChoice==="rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
      playGame(userChoice);
    });
});