import '../../node_modules/animate.css/animate.css'
function makeHomePage () {
    const content = document.querySelector('div#content')
    //if a page has already loaded before, remove it first before adding new content
    if (content.querySelector(".textContainer")){
        const oldContainer = content.querySelector(".textContainer")
        content.removeChild(oldContainer)
    }

    //create slogan container (box)
    const container = document.createElement('div')
    container.classList.add('textContainer')
    container.classList.add('animate__animated', 'animate__zoomIn')
    container.id = "home"
    
    //create slogan
    const slogan = document.createElement('div')
    slogan.id = 'slogan'
    slogan.innerHTML = "Fresh<br>&<br>Delicious!"
    
    //append elements
    container.appendChild(slogan)
    content.appendChild(container);
}
export {makeHomePage}