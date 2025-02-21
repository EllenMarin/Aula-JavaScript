import {importantText,Button} from "./modules.js";
console.log(importantText);


/*criar um botao de html na pagina e um eventlistener qua ao clicar no botao usa esse btn.click() */


const btnSubmit = document.getElementById("btnSubmit");
const btn = new Button();

btnSubmit.addEventListener("click",()=>{
    btn.click();
})