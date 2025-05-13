let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");

const genCompChoices=()=>{
    const options=["array","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
};

const draw=() =>{
    msg.innerText="Draw🫂"
    msg.style.backgroundColor="#808A9F";

};  

const showWinner =(userWin) =>{
    if(userWin)
    {
        userScore++;
        usersc.innerText=userScore;
        msg.innerText="You Win!🌟"
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compsc.innerText=compScore;
        msg.innerText="You Lose😶"
        msg.style.backgroundColor="red";
    }
}

const playGame =(userChoice) =>{
    const compChoice=genCompChoices();

    if(userChoice==compChoice)
    {
        draw();
    }
    else{
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin=compChoice==="paper"?false:true; 
        }
        else if(userChoice=="paper")
            {
                userWin=compChoice==="scissors"?false:true; 
            }
        else if(userChoice=="scissors")
            {
                userWin=compChoice==="rock"?false:true; 
            }
        showWinner(userWin);
        }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
 