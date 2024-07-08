const questions={
    "India won the one-day cricket world cup in 1983":true,
    "Australia has won the ODI world cup the most number of times":true,
    "Cricket bats are made from oakwood":false,
    "IPL is the biggest franchise cricket league in the world":true,
    "The cover drive is a shot played on the leg side":false
}

var curr_question_index=-1
var correct_answers=0
const quiz=document.getElementById('quiz')

function TRUE(){
    check_answer_show_next_question(true)
}

function FALSE(){
    check_answer_show_next_question(false)
}

function RESET(){
    quiz.innerHTML=`<h3>Click on start when you are ready</h3> <br> <br> <button onclick="check_answer_show_next_question('')">START</button>`
    curr_question_index=-1
    correct_answers=0
}

function check_answer_show_next_question(answer){
    if (answer===questions[Object.keys(questions)[curr_question_index]]){
        correct_answers+=1
    }
    curr_question_index+=1
    if(curr_question_index===Object.keys(questions).length){
        quiz.innerHTML=`<h2>You got ${correct_answers}/${Object.keys(questions).length} questions correct!!</h2>
        <button onclick="RESET()">TRY AGAIN</button>`
    }
    else{
        quiz.innerHTML=`<h3>Is the following statement true or false?</h3>
        <br>
        <p><h4>${Object.keys(questions)[curr_question_index]}</h4></p>
        <button onclick="TRUE()">TRUE</button>
        <button onclick="FALSE()">FALSE</button>`
    }
}