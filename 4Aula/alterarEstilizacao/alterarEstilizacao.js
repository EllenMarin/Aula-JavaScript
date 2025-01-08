document.addEventListener("DOMContentLoaded", function(){
    const cobaia = document.getElementById("cobaia");

    cobaia.style.background = "#dedede";
    cobaia.style.border = "2px solid #CCC";
    cobaia.style.padding = "20px 30px";
    cobaia.style.width = "300px";
    cobaia.style.fontFamily = "Arial, sans serif";

    console.log(cobaia);

    const cobaia02 = document.getElementById("cobaia02");
    cobaia02.classList.add("green-box");

    console.log(cobaia02);
})