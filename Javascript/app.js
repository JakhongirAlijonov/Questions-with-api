const api ="https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";

async function requestApi(api) {
  let request = await fetch(api);

  let data = await request.json();
  getData(data);
}

requestApi(api);
let questConuter = 0
function getData(data) {
  
  
  document.querySelector('#startBtn').addEventListener('click', ()=>{
    createQuestionCard(data)

  })

document.querySelector('.nextQuest').addEventListener('click', e=>{
  questConuter++
  
  createQuestionCard(data)
  
  
})
}


function createQuestionCard(data){
  if (data[questConuter]){
   let question = data[questConuter]
    document.querySelector('.questions-container').innerHTML =`
    <div class="question">
            <div class="time-number">
              <p class="questionNumber">
                Question: <span id="questionNumber">${question.id}</span>
              </p>
              <p class="time">Time left: <span id="questionTime">15:00</span></p>
            </div>
            <h2 class="question-title">${question.question}</h2>
            <div class="answers">
              <button class="answer1" required>${question.answer1.answer1}</button>
              <button class="answer2">${question.answer2.answer2}</button>
              <button class="answer3">${question.answer3.answer3}</button>
              <button class="answer4">${question.answer4.answer4}</button>
            </div>
          </div>
          `
  }
  else{
    console.log('Savollar tugadi')
  }
    
}

