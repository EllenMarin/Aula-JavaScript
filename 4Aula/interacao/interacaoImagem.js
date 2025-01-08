document.addEventListener("DOMContentLoaded", function() {
    const imagem = document.getElementById("imagem");
    
    console.log(imagem.src);

    imagem.src = "img/img02.jpg";
    
    const link = document.getElementById("link");
    
    link.href = "https://flag.pt";
    link.textContent = "Flag";
})