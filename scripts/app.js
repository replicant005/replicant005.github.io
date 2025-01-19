"use strict";

// IIFE - Immediately Invoked functional expression
(function () {

    function DisplayHomePage(){
        console.log("Calling DisplayHomePage....");

        let AboutUsBtn = document.getElementById("AboutUsBtn");
        AboutUsBtn.addEventListener("click", function(){
            location.href = "about.html";
        });

        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");

        //<p id="MainParagraph" class="mt-3">This is my first main paragraph</p>
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "This is my first main paragraph";


        // Display to screen
        MainContent.appendChild(MainParagraph);

        let FirstString= "This is ";
        //String literal
        let SecondString = `${FirstString} my second string`;
        MainParagraph.textContent = SecondString;
        //Display to string
        MainContent.appendChild(MainParagraph);

        let DocumentBody = document.body;

        let Article = document.createElement("article");
        let ArticleParagraph =`<p id = "ArticleParagraph" class="mt-3">This is my first article paragraph</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }

    function DisplayProductsPage(){
        console.log("Calling DisplayProductsPage....");
    }
    function DisplayServicesPage(){
        console.log("Calling DisplayServicesPage....");
    }
    function DisplayAboutPage(){
        console.log("Calling DisplayAboutPage....");
    }
    function DisplayContactPage(){
        console.log("Calling DisplayContactPage....");
    }

    function Start() {
        console.log("Starting App...");



        switch (document.title) {
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About":
                DisplayAboutPage();
                break;
            case "Contact":
                DisplayContactPage();
                break;
        }
    }
    window.addEventListener("load", Start);

})();