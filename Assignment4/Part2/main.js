/*  
      Name: Mehak Kapur
      Date: 01/08/2024
      File: main.js
      Description: assignment4 Part2 - Images display
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

const alternativeText = {
    "pic1.jpg" : "Closeup of a human eye",
    "pic2.jpg" : "Marble waves",
    "pic3.jpg" : "Flowers",
    "pic4.jpg" : "Pharoah",
    "pic5.jpg" : "Huge butterfly"
};

for (const image of images){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alternativeText[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e=>{
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}



btn.addEventListener("click", ()=>{
    const btnClass = btn.getAttribute("class");
    if (btnClass === "dark"){ 
        btn.setAttribute("class", "light");
        btn.textContent = "lighter";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darker";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});