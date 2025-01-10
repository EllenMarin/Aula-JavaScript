document.addEventListener("DOMContentLoaded", function(){

    const buttons = document.getElementsByTagName("button");
    

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            console.log("Clicaste no " + buttons[i].textContent);
        })
    }


    const countries = ["Portugal", "Brasil", "Espanah", "Cabo Verde", "França"];

    let i = 0;
    while(i < countries.length){
        console.log(i, countries[1]);

        i++;
    }

    for(let i = 0; i < countries.length; i++){
        console.log(i, countries[1]);
    }
})
