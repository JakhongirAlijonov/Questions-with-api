const createQuestForm= document.getElementById('createQuestForm')

const api ="https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";
createQuestForm.addEventListener('submit' , e=>{
    e.preventDefault()
fetch(api , {
method: "POST",
body: JSON.stringify({

    
    question:questBody.value,
    answer1: { answer1: answer1.value , isTrue: radio1.checked},
    answer2: { answer2: answer2.value , isTrue: radio2.checked},
    answer3: { answer3: answer3.value , isTrue: radio3.checked},
    answer4: { answer4: answer4.value , isTrue: radio4.checked},

}),
headers: {
    "Content-Type":"application/json; charset=UTF-8"
}

}).then(function(res){
return res.json()
})
.then(getData)

createQuestForm.reset()

})




function getData (data){
console.log(data);

}

    
    
    



