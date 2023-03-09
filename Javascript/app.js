const api =
  "https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";
  let questionNumber = document.querySelector('#questionNumber')
  let questionTitle = document.querySelector('.question-title')
  let answer1 = document.querySelector('.answer1')
  let answer2 = document.querySelector('.answer2')
  let answer3 = document.querySelector('.answer3')
  let answer4 = document.querySelector('.answer4')
  let questContainer = document.querySelector('.questions-container')





// fetch api 

async function requestApi(api) {
  let request = await fetch(api);

  let data = await request.json();
  getData(data);
}

requestApi(api);
let questConuter = 0;
function getData(data) {
  document.querySelector("#questLength").innerHTML = data.length;

  document.querySelector("#startBtn").addEventListener("click", () => {
    createQuestionCard(data);
    timeCalc();
    document.querySelector(".nextQuest").classList.remove("none");
    document.querySelector(".startText").classList.add("none");
    questContainer.classList.remove('none')
  });

  document.querySelector(".nextQuest").addEventListener("click", (e) => {
    questConuter++;

    createQuestionCard(data);
  });
}


//  create question text 
function createQuestionCard(data) {
  if (data[questConuter]) {
    let question = data[questConuter];

    questionNumber.innerHTML = question.id
    questionTitle.innerHTML = question.question
    answer1.innerHTML= question.answer1.answer1
    answer2.innerHTML= question.answer2.answer2
    answer3.innerHTML= question.answer3.answer3
    answer4.innerHTML= question.answer4.answer4


  } else {
    alert("Savollar tugadi");

  
  }
  let buttons = document.querySelectorAll('.button')
  buttons.forEach(button=>{
    button.addEventListener('click' , e=>{

      switch (e.target.classList[0]) {
        case 'answer1':
          
          break;
      
        default:
          break;
      }

    })
  })
}







// time manager function

let minutes = 14;
let seconds = 60;
let timeShow = document.querySelector("#questionTime");

function timeCalc() {
  let timeInterval = setInterval(()=>{
    seconds--;
    if (seconds <= 0 && minutes>0) {
      minutes--;
      seconds = 60;
    }
    timeShow.innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    if(minutes == 0 && seconds == 0){
      clearInterval(timeInterval)
      alert("Vaqtingiz tugadi")
    }
    
  }, 1000);

}
