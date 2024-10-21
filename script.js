const questions = [
    {
        question:"1. Who baptist jesus",
        answer: [
            {
                text:"john", correct: true
            },
            {
                text:"peter", correct: false
            },
            {
                text:"joshua", correct: false
            },
            {
                text:"God", correct: false
            }
        ]
    },
    {
        question:"2. who betrayed jesus",
        answer: [
            {
                text:"Judas iscariot", correct: true
            },
            {
                text:"james", correct: false
            },
            {
                text:"john", correct: false
            },
            {
                text:"isaiah", correct: false
            }
        ]
    },
    {
        question:"3. Who baptist jesus",
        answer: [
            {
                text:"john", correct: true
            },
            {
                text:"peter", correct: false
            },
            {
                text:"joshua", correct: false
            },
            {
                text:"God", correct: false
            }
        ]
    }
]

const txtQue = document.getElementById("que-txt");
const btnAns = document.getElementById("answer-btn");
const btnNext = document.getElementById("button-nxt");

function startQuiz(){
    currentQuestion = 0;
    score = 0;
    btnNext.style.display = "Block"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuizQuestion = questions[currentQuestion];
    txtQue.innerHTML = currentQuizQuestion.question
    
    currentQuizQuestion.answer.forEach((answers) => {
        const btn = document.createElement("button");
        btn.innerHTML = answers.text;
        btn.classList.add("btn")
        btnAns.appendChild(btn);

        btn.addEventListener("click", () => {
            if(answers.correct){
             btn.classList.add("correct");
             score++
            } else{
             btn.classList.add("wrong");
            }
            btnNext.disabled = false;
         });
    })
    btnNext.addEventListener("click", () => {
        if (currentQuestion < questions.length-1){
            resetState();
            currentQuestion++
            currentQuizQuestion = questions[currentQuestion]
            txtQue.innerHTML = currentQuizQuestion.question

            currentQuizQuestion.answer.forEach((answers) => {
                const btn = document.createElement("button");
                btn.innerHTML = answers.text;
                btn.classList.add("btn")
                btnAns.appendChild(btn);

                btn.addEventListener("click", () => {
                    if(answers.correct){
                    btn.classList.add("correct");
                    score++
                    } else{
                    btn.classList.add("wrong");
                    }
                    btnNext.disabled = false;
                });
                
            });
        }else{
            txtQue.innerHTML = "Score: "
            btnAns.innerHTML = `You scored ${score} out of ${questions.length}`
        }
    })
}
function resetState(params) {
    while(btnAns.firstChild){
        btnAns.removeChild(btnAns.firstChild)
    }
}

startQuiz();
