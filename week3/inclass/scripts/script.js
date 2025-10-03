let cBox = document.getElementById("colorBox")
let colorBtn = document.getElementById("changeColor")
let imgBox = document.getElementById("quokkaImage")
let imageBtn = document.getElementById("toggleImage")

let assignRandomColor = function()
{
    let rComp = 255 * Math.random()
    let gComp = 255 * Math.random()
    let bComp = 255 * Math.random()
    cBox.style.backgroundColor = "rgb(" + rComp + ", " + gComp + ", " + bComp + ")"
}

const toggleQuokkaImage = () => 
{
    console.log(imgBox.src)
    if(imgBox.src.includes("quokka1"))
    {
        imgBox.src = "assets/quokka2.jpg"
    }
    else 
    {
        imgBox.src = "assets/quokka1.jpg"
    }
}

imageBtn.addEventListener("click", toggleQuokkaImage)
colorBtn.addEventListener("click", assignRandomColor)