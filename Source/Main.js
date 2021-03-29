//Toggling between light and dark mode!
let light_mode_toggle = () => {
    //Toggling a class to let the CSS do the heavy lifting
    let element = document.body
    let darkModeColour = "white"
    let lightModeColour = "black"
    element.classList.toggle("body")

    //Changing the actual toggle itself 
    let toggle = document.getElementById("LMT")
    if(toggle.innerText == "Dark mode toggle!") 
    { 
        toggle.innerText = "Light mode toggle!"
        toggle.style.color = darkModeColour
    } 
    else 
    {
        toggle.innerText = "Dark mode toggle!"
        toggle.style.color = lightModeColour
    }
}

//Toggling the quotation images

let toggle_Quotations = () => {
    let image = document.getElementById("with_quotations")
    if(image.style.display == "block") {
        image.style.display = "none"
    } else {
        image.style.display = "block"
    }
}

let toggle_nQuotations = () => {
    let image = document.getElementById("no_quotations")
    
    if(image.style.display == "block") {
        image.style.display = "none"
    } else {
        image.style.display = "block"
    }
}

let toggle_FQ = () => {

}

let toggle_nFQ = () => {

}
