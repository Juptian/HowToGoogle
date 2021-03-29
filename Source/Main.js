//Toggling between light and dark mode!
let light_mode_toggle = () => {
    //Toggling a class to let the CSS do the heavy lifting
    let element = document.body;
    element.classList.toggle("body")

    //Changing the actual toggle itself 
    let toggle = document.getElementById("LMT")
    if(toggle.innerText == "Dark mode toggle!") 
    { 
        toggle.innerText = "Light mode toggle!"
        toggle.style.backgroundColor = "whitesmoke"
        toggle.style.color = "black"
    } 
    else 
    {
        toggle.innerText = "Dark mode toggle!"
        toggle.style.backgroundColor = "black"
        toggle.style.color = "#ffffff"
    }
}
