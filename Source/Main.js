let light_mode_toggle = () => {
    let element = document.body;
    element.classList.toggle("dark_mode")
    let toggle = document.getElementById("LMT")
    if(toggle.innerText == "Dark mode toggle!") { 
        toggle.innerText = "Light mode toggle!"
        toggle.style.backgroundColor = "whitesmoke"
        toggle.style.color = "black"
    } else {
        toggle.innerText = "Dark mode toggle!"
        toggle.style.backgroundColor = "black"
        toggle.style.color = "whitesmoke"
    }
}