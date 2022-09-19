//STEP 01: create an XHR object.
var request =new XMLHttpRequest();
//STEP 02:initate a request.
request.open("GET","https://restcountries.com/v2/all");
//STEP 03:sending the request.
request.send();
//STEP 04:oncee the data successfully loaded from serverr
//STATUS CODE : 200
//EVENT : it is  a specific work
//ONLOAD event : it helps us to load the event
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    for(let i=0; i<result.length; i++){
    console.log(result[i].flag);
    }

};
