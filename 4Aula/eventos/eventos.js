document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("btn");
    const img = document.getElementById("imagem");

    const currentImage = img.src;
    const nextImage = "../img/img02.jpg";

    btn.addEventListener("click", function() {
        
        if(img.src ==  currentImage){
            img.src = nextImage;
        }else{
           img.src = currentImage;
        }
    });
});