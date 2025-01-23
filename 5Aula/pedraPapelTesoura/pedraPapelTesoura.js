/*Implementar regras do jogo:
papel vence pedra, pedra vence tesoura, tesoura vence papel*/
document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.getElementsByTagName("button");
    //const cpuChoice = "Tesoura";
    const arrayCpuChoice = ["Pedra", "Papel", "Tesoura"];

    const player = document.getElementById("player");
    const cpu = document.getElementById("cpu");
    const result = document.getElementById("result");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){

            const playerChoice = buttons[i].textContent;

            let randomPlay = Math.floor(Math.random() * arrayCpuChoice.length );
            const cpuChoice = arrayCpuChoice[randomPlay];
            
            
             if(cpuChoice === playerChoice){
               result.textContent = "Empatou";
             }
             if(
                  (cpuChoice === "Pedra" && playerChoice === "Papel") ||
                  (cpuChoice === "Papel" && playerChoice === "Tesoura") ||
                  (cpuChoice === "Tesoura" && playerChoice === "Pedra")
               ){
                result.textContent = "Ganhou";
             }
             
             if(
                  (cpuChoice === "Pedra" && playerChoice === "Tesoura") ||
                  (cpuChoice === "Papel" && playerChoice === "Pedra") ||
                  (cpuChoice === "Tesoura" && playerChoice === "Papel")
               ){
                result.textContent = "Perdeu";
             }

             player.textContent = playerChoice;
             cpu.textContent = cpuChoice;


             
        })
    }

})