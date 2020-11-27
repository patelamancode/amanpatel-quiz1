var readlineSync = require("readline-sync")
var score = 0
var userName = readlineSync.question("Tell me your name Sir/Madam ?\n")
var uppr = userName.toUpperCase()
// for emoji; window key + >
console.log("----------------\nRam Ram 🙏   !! " +uppr  +" Ji")
// quiz based on orai
var userPlace = readlineSync.question("Where are you from ? \n")
console.log("----------------\nLet's play a game!!\n------------------\nHow well do you know me? \n")
console.log("You can give your Answer either by option or option name.  \n\n")


// function
function play(Answerone,Answertwo){
  var userAnswer = readlineSync.question("\ntype your answer: ")
  var lower = userAnswer.toLowerCase()

  if((Answerone===lower)||(Answertwo===lower)){
    score = score + 1
    console.log("\nWow!🎉  you also knew this about me.\n*************\n your current score is: " + score+"\n************\n")
  }else{
    score=score-1
    console.log("\nyou don't know me enough lol🙆‍♂️ .\n----------------\n your current score is: " +score+ "\n----------------\n" )
  }
}
 
// array
var array = [
  {question:"what is Aman's present age? \na:20 \nb:21 \nc:22 \nd:23",
  answer:"d",
  answertwo: "23"
  },
  {question:"what stream did he chose in btech? \na: IT \nb: EEE \nc: CS \nd: CIVIL",
  answer:"b",
  answertwo: "eee"
  },
  {question:"what is the passing year of aman? \na: 2018 \nb: 2019 \nc: 2020 \nd: 2021",
  answer:"c",
  answertwo: "2020"
  },
  {question:"which city did he lived in 2020 ? \na: noida \nb: delhi \nc: kota \nd: greater noida ",
  answer:"d",
  answertwo: "greater noida"
  },
  {question:"Aman's favourite color is? \na: blue \nb: black \nc: red \nd: white",
  answer:"b",
  answertwo: "black"
  }
]

// loop
for(var i=0; i<array.length; i++){
 console.log("Ques",(i+1)+'.',array[i].question)
 play(array[i].answer,array[i].answertwo)
}

console.log("\n\n\n\nYOUR FINAL SCORE IS: "+ score )

if(score < 3){
  console.log("so sad! we are'nt too close")
}else if(score = 5){
  console.log("wow! you are too close.")
}