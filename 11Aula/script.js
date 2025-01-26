 document.addEventListener("DOMContentLoaded",function(){
    const form = document.querySelector("form")
    const words = [
        "Presente",
        "pneumoultramicroscopicossilicovulcanoconiótico",
        "Otorrinolaringologista",
        "Efetivamente",
        "Espirituoso",
        "Australopiteco",
        "Chinchila",
        "Portualegre",
        "Amigo"
    ]
    const chosenWord = words[Math.floor(Math.random() * words.length)]
    console.log(chosenWord)

    const gameArea = document.getElementById("gameArea");

    for(let i = 0; i < chosenWord.length;i++){
        gameArea.appendChild(document.createElement("span")).textContent = "_";
    }
    let attempts = 6;
    form.addEventListener("submit",function(event){
        event.preventDefault();

        const letterPik = form.letter.value.toUpperCase();

        form.letter.value = "";
        console.log("letterpik :" + letterPik)

        let isCorrect = false;

        for(let i = 0; i < chosenWord.length; i++){

            let currentLetter = chosenWord[i].toUpperCase();//pegar a letra que o utilizador escolheu e transformar em maiusculas

            if(letterPik === currentLetter){
                //baseado no array gameArea que foi gerado, vai ser colocado no indice correto a letra escolhida do usuario
                gameArea.children[i].textContent = letterPik;
                isCorrect = true;
            }
        }
        //Criar um sistema de tentativas começa em 6 cada vez que o utilizador errar perde
        
        console.log("Antes do ciclo: " + attempts)

        if(isCorrect === false){
            attempts--;

        }
        if(attempts === 0){
            window.location.reload();
            console.log("Game over")
        }

        console.log("Depois do ciclo: " + attempts)
    })
    
    
    
})