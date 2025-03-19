document.addEventListener("DOMContentLoaded", () => {
    const titlu1 = document.getElementById("titlu1");
    titlu1.style.color="red";
    titlu1.style.fontSize="2.4rem";
    const allh3=document.querySelectorAll("h3");
    allh3.forEach((h3) => {
        h3.style.backgroundColor = "black";
    });
    const social=document.getElementsByClassName("social-wrap");
    for (let i=0;i<social.length;i++){
        social[i].style.backgroundColor="black";
    }
    const newDiv = document.createElement("div");
    newDiv.textContent="Haddonfield, a mysterious place!";
    newDiv.style.color="white";
    newDiv.style.backgroundColor="black";
    newDiv.style.padding="8px";
    newDiv.style.fontSize="1.7rem";
    titlu1.appendChild(newDiv);
    document.addEventListener("keydown", function (event) {
        if (event.shiftKey) {
            // Selectează toate elementele cu clasa "nu4"
            const nu22 = document.getElementsByClassName("nu4");

            // Aplică modificarea stilului fiecărui element
            for (let i = 0; i < nu22.length; i++) {
                nu22[i].style.color = "black"; // Schimbă culoarea textului
            }
            alert("You've pressed SHIFT")
        }
    });
    newDiv.addEventListener("mouseover", () => {
        newDiv.style.color = "red"; 
    });
    newDiv.addEventListener("mouseout", () => {
        newDiv.style.color = "white";
    });
    newDiv.addEventListener("click", ()=>{
        alert("Ai apasat aici!");
    });
    raspuns = document.getElementById("raspunsuri");
    raspuns.addEventListener("click", ()=>{
        alert("We have received your options!");
    });
    const numar=document.getElementById("myNumber");
    const buton=document.getElementById("doubleNumber");
    buton.addEventListener("click", ()=>{
        let currentValue = parseInt(numar.value);
        numar.value=currentValue*2;
    });
    const text=document.getElementById("myText");
    const textModificat=document.getElementById("pressText");
    textModificat.addEventListener("click", ()=> {
        text.value="Haddonfield!"; 
    });
    const range=document.getElementById("myRange");
    const displayAfisat=document.getElementById("valueDisplay");
    range.addEventListener("input", ()=>{
        displayAfisat.textContent = range.value;
    });
    const radio1=document.getElementById("greenRadio");
    const radio2=document.getElementById("blueRadio");
    radio1.addEventListener("click", ()=>{
        alert("Correct!");
    });
    radio2.addEventListener("click", ()=>{
        alert("Wrong!");
    });
    const desc1=document.getElementById("descriere1");
    const desc2=document.getElementById("descriere2");
    desc1.addEventListener("click", (event) => {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let code = "#";
        for (let i = 0; i < 6; i++) {
            code += hexArray[Math.floor(Math.random() * 16)];
        }
        desc1.style.color = code;
        const cssColor = window.getComputedStyle(desc1);
        desc1.textContent = desc1.textContent + '\n Culoare: ' + cssColor.getPropertyValue("color");
        event.stopPropagation(); 
    });

    document.body.addEventListener("click", () => {
    });
    setTimeout(()=>{
        desc2.style.color="grey";
    },3000);
    
});