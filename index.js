let numIncrease = 0, mistake = 0;

displayText();


//function to poputale page with paragraph sentence
function displayText() {
    var randomPragraph = Math.floor(Math.random() * dan.length);

    var displayParagraph = dan[randomPragraph].split("");     //break the sentence paragraph to letters

    console.log(displayParagraph);
    document.querySelector(".mistake").innerHTML = "Mistake:  "+mistake;


    //add up each character from the paragraph to be displayer
    displayParagraph.forEach(element => {
        let span = `<span>${element}</span>`;
        spenText = document.querySelector("p").innerHTML += span;
          
    });
}



//type from keyboard to show same character in the paragraph
document.addEventListener("keydown", function (e) {

    var see = document.querySelectorAll("span")[numIncrease].innerHTML;
    document.querySelectorAll("span")[numIncrease].classList.add("focus-color");
    
    if (see=== e.key) {
        console.log("correct");
    } else {
        console.log(mistake);
        document.querySelector(".mistake").innerHTML = "Mistake:  "+mistake;

        mistake++;
    }
    
    numIncrease++;      //increase and move to the next character/alphabet
    
    console.log(see);  
});


//clear everything in page for new one and refresh
document.querySelector("button").addEventListener("click", function () {

    document.querySelector("p").innerHTML = "";
    document.querySelector("button").blur();
    mistake = 0;
    numIncrease = 0;
    document.querySelector(".mistake").innerHTML = "Mistake:  "+mistake;

    setTimeout(() => {
        displayText();
    }, 300);
    

});
