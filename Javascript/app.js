const api ="https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";

async function requestApi(api) {
  let request = await fetch(api);

  let data = await request.json();
  getData(data);
}

requestApi(api);
let questConuter = 0
function getData(data) {
  
  document.querySelector('#questLength').innerHTML = data.length
  
  document.querySelector('#startBtn').addEventListener('click', ()=>{
    createQuestionCard(data)
    timeCalc()
    document.querySelector('.nextQuest').classList.remove('none')
    document.querySelector('.startText').classList.add('none')
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


function timeCalc(){
  let minutes = 14
  let seconds = 60
  let timeShow = document.querySelector('#questionTime')

 let timeInterval = setInterval(()=>{
    seconds--
    timeShow.innerHTML = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`
    if(seconds <= 0){
      minutes--
      seconds = 60
    }
  } , 1000)

  if(minutes == '00' ){
    clearInterval(timeInterval)
    alert('Vaqtingiz tugadi')
  }

}