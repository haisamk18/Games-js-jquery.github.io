const computerchoiceDisplay = document.getElementById('computerdisplay')
const possibleChoices =document.querySelectorAll('button')
const userchoiceDisplay =document.getElementById('yourdisplay')
const resultDisplay = document.getElementById('resultdisplay')
let userchoice
let computerchoice



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',function(e){
    userchoice=e.target.id
    userchoiceDisplay.innerHTML=userchoice
    computerschoice()
    result()

}))

function computerschoice() {
  const randomNumber = Math.floor(Math.random()*3)+1  ;
  console.log(randomNumber);

  if (randomNumber===1) {
      computerchoice='Rock'
  }
  if (randomNumber===2) {
    computerchoice='Scissor'
  }
  if (randomNumber===3) {
    computerchoice='Paper'
  }
  computerchoiceDisplay.innerHTML=computerchoice

}

function result() {
    if (computerchoice=== userchoice){
        resultDisplay.innerHTML='Oh Its a Draw!'

    }
    if (computerchoice=='Scissor' && userchoice =='Paper') {
        resultDisplay.innerHTML="Oops ! You lose"

    }
    if (computerchoice=='Scissor' && userchoice=="Rock"){
        resultDisplay.innerHTML="Yay ! You won"
    }
    if (computerchoice=='Paper' && userchoice=="Scissor"){
        resultDisplay.innerHTML="Yay ! You won"
    }
    if (computerchoice=='Paper' && userchoice=="Rock"){
        resultDisplay.innerHTML="Yay ! You won"
    }
    if (computerchoice=='Rock' && userchoice=="Scissor"){
        resultDisplay.innerHTML="Oops ! You lose"
    }
    
   
    if (computerchoice=='Rock' && userchoice=="Paper"){
        resultDisplay.innerHTML="Oops ! You lose"
    }
}



