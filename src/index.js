import {makeHomePage} from  "../src/modules/homePage.js"
import {makeMenuPage} from  "../src/modules/menu.js"
import {makeContactPage} from  "../src/modules/contact.js"
import '../dist/styles.css'

//cache DOM
const homeBtn = document.querySelector("#home")
const menuBtn = document.querySelector("#menu")
const contactBtn = document.querySelector("#contact")

//load slogan on home page once window is loaded
window.addEventListener('load', makeHomePage)

//event listeners for switching tabs
homeBtn.addEventListener('click', (e)=>{
    menuBtn.classList.remove('inFocus')
    contactBtn.classList.remove('inFocus')
    e.target.classList.add('inFocus')
    makeHomePage(e)
})
menuBtn.addEventListener('click', (e)=>{
    homeBtn.classList.remove('inFocus')
    contactBtn.classList.remove('inFocus')
    e.target.classList.add('inFocus')
    makeMenuPage(e)
})
contactBtn.addEventListener('click', (e)=>{
    homeBtn.classList.remove('inFocus')
    menuBtn.classList.remove('inFocus')
    e.target.classList.add('inFocus')
    makeContactPage(e)
})
