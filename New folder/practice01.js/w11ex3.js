window.onload = function(){
function createlink(){
    // create html elements 
    let e = document.createElement('a')
    e.textContent =     "Durham college" ;
    e.href = "https://durhamcollege.ca/";
    document.body.append(e)
}

 document.querySelector('#btn1').addEventListener('click' , createlink)

}