let entrar = document.querySelector(".entrar");
let modalLogin = document.querySelector("#modalLogin");
let botaoEntrar = document.querySelector(".botaoEntrar");
let hamburger = document.querySelector("#hamburger");
let desceMenu = document.querySelector("#desceMenu");
let fechaMenu = document.querySelector("#fechaMenu")

entrar.addEventListener("click", function() {
    modalLogin.style.display = "flex";
    
});

botaoEntrar.addEventListener("click", function() {
    modalLogin.style.display = "none";
});

hamburger.addEventListener("click", function(){
    desceMenu.style.display = "flex"

})

fechaMenu.addEventListener("click", function(){
    desceMenu.style.display = "none"

})


