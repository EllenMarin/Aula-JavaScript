/*Ao clicar no botao muda para class red, ao clicar de novo muda para classe green*/

document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("box");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function() {

        /*
        if(box.classList.contains("red") == false){
            box.classList.remove("green");
            box.classList.add("red");

        }
        else {
            box.classList.remove("red");
            box.classList.add("green");

        }*/

        //toggle = faz a condição sozinha
        box.classList.toggle("red");
        box.classList.toggle("green");


    })

})