const createQuestForm= document.getElementById('createQuestForm')

const api ="https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";
createQuestForm.addEventListener('submit' , e=>{
    e.preventDefault()
fetch(api , {
method: "POST",
body: JSON.stringify({

    
    question:questBody.value,
    answer1: { answer1: answer1.value , isTrue: 'true'},
    answer2: { answer2: answer2.value , isTrue: 'false'},
    answer3: { answer3: answer3.value , isTrue: 'false'},
    answer4: { answer4: answer4.value , isTrue: 'false'},

}),
headers: {
    "Content-Type":"application/json; charset=UTF-8"
}

}).then(function(res){
return res.json()
})
.then(getData)
})




function getData (data){
console.log(data);

}

    
    
    


// console.log(createQuestForm);
