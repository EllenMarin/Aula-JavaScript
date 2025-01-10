document.addEventListener("DOMContentLoaded", function(){
    const agressBtn = document.getElementById("agress");
    const showModalBtn = document.getElementById("showModal");
    const modalWrapper = document.getElementById("modalWrapper");

    showModalBtn.addEventListener("click", function() {
        modalWrapper.classList.remove ("hide");
        
    })

    agressBtn.addEventListener("click", function() {
        modalWrapper.classList.add("hide");
    })
    
})