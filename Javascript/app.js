const api ="https://63efbc8cc59531ccf175fb34.mockapi.io/crazy-courses/courses/";

async function requestApi(api) {
  let request = await fetch(api);

  let data = await request.json();
  getData(data);
}

requestApi(api);

function getData(data) {
  data && data.map(question=>{
    console.log(question);
  })
}
getData();



