 document.addEventListener("DOMContentLoaded",function(){
    const form = document.querySelector("form");
    const img = document.querySelector("img");

    const words = [
        "Brasil", 
        "Argentina", 
        "França", 
        "Japao", 
        "Estados Unidos", 
        "Canada", 
        "Alemanha", 
        "Italia", 
        "Mexico", 
        "Australia"
    ]
    const chosenWord = words[Math.floor(Math.random() * words.length)]
    console.log(chosenWord)

    const gameArea = document.getElementById("gameArea");

    for(let i = 0; i < chosenWord.length;i++){
        gameArea.appendChild(document.createElement("span")).textContent = "_";
    }
    let attempts = 6;

    function createFallingRibbons() {
        const confettiContainer = document.getElementById("confetti");
        confettiContainer.innerHTML = ''; // Clear existing ribbons
    
        const colors = [
            "linear-gradient(to bottom, #ff4081, #ff80ab, #ffc1e3)",
            "linear-gradient(to bottom, #42a5f5, #64b5f6, #bbdefb)",
            "linear-gradient(to bottom, #ffeb3b, #fff176, #fff59d)",
            "linear-gradient(to bottom, #4caf50, #81c784, #a5d6a7)",
            "linear-gradient(to bottom, #ff5722, #ff8a65, #ffccbc)"
        ];

        for (let i = 0; i < 50; i++) {
            const ribbon = document.createElement("div");
            ribbon.classList.add("ribbon");
            ribbon.style.left = Math.random() * 100 + "vw";
            ribbon.style.background = colors[Math.floor(Math.random() * colors.length)];
            ribbon.style.animationDelay = Math.random() * 2 + "s";
            ribbon.style.animationDuration = (Math.random() * 3 + 3) + "s";
            confettiContainer.appendChild(ribbon);
        }
    }    
    // Chama a função para criar os fitilhos
    createFallingRibbons();
    
    

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
            attemptsNumber.textContent = "Ainda tem " + attempts + " tentativas";

        }
        if(attempts === 0){
            const gameOver = document.getElementById("gameOver");
            gameOver.textContent = "GAME OVER! Tente de novo";

            gameOver.style.display = "block"; 
            console.log(gameOver)

            setTimeout(() => {
                window.location.reload();
            }, 6000)
        }

        console.log("Depois do ciclo: " + attempts)

        if(attempts === 5){
            img.src = "img/img2.png";
            img.width = 200;

            img.parentElement = img
        }
        if(attempts === 4){
            img.src = "img/img3.png";
            img.width = 200;

            img.parentElement = img
        }
        if(attempts === 3){
            img.src = "img/img4.png";
            img.width = 200;

            img.parentElement = img
        }
        if(attempts === 2){
            img.src = "img/img5.png";
            img.width = 200;

            img.parentElement = img
        }
        if(attempts === 1){
            img.src = "img/img6.png";
            img.width = 200;

            img.parentElement = img
        }

        // Verificar se todas as letras foram adivinhadas
        const isWin = Array.from(gameArea.children).every(span => span.textContent !== "_");
        if (isWin) {
            // Exibir animação de parabéns
            const congrats = document.getElementById("congrats");
            congrats.textContent = "Parabéns! Você acertou!";

            // Create and show confetti
            const confettiContainer = document.getElementById("confetti");
            confettiContainer.style.display = "block"; 
            congrats.style.display = "block"; 
            createFallingRibbons();

            // Recarregar a página após 6 segundos
            setTimeout(() => {
                window.location.reload();
            }, 6000);
        }
        
    })
    
    
})