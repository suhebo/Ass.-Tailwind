const iconButton = document.querySelector("#iconButton")


iconButton.addEventListener("click" , function(){
    links.style.display = "flex"
    closeButton.style.display = "block"
    iconButton.style.display = "none"
})

closeButton.addEventListener("click" , function(){
    links.style.display = "none"
    closeButton.style.display = "none"
    iconButton.style.display = "block"
})