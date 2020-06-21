import '../../node_modules/animate.css/animate.css'
import Image1 from '../img/mae-mu-I7A_pHLcQK8-unsplash.jpg'
import Image2 from '../img/sameer-waskar-KojQfg8UdCE-unsplash.jpg'
import Image3 from '../img/amirali-mirhashemian-Tqr2yaJvksM-unsplash.jpg'
import Image4 from '../img/louis-hansel-shotsoflouis-vi0kZuoe0-8-unsplash.jpg'
import Image5 from '../img/alexander-mils-wBIeri0fLuw-unsplash.jpg'

function makeMenuPage () {
    const content = document.querySelector('div#content')
    if (!content.querySelector('#textContainer')){
        //if a page has already loaded before, remove it first before adding new content
        if (content.querySelector(".textContainer")){
            const oldContainer = content.querySelector(".textContainer")
            content.removeChild(oldContainer)
        }
        //create menu page container, add menu header
        const container = document.createElement('div')
        container.classList.add('textContainer')
        container.classList.add('animate__animated', 'animate__fadeIn')
        container.id = "menu"
        const title = document.createElement('h1')
        title.innerHTML = "Menu"
        container.appendChild(title);

        const foods = [
            {name:'Signiture Beef Burger', image: Image1}, 
            {name:'Chicken Burger', image: Image2}, 
            {name:'Veggie Burger', image: Image3}, 
            {name:'French Fries', image: Image4},
            {name:'Fruit Smoothies', image: Image5}
        ]

        //creat and add food names and respective imgs to menu container
        let foodTitle, foodImg, foodCard
        for (let i=0; i<foods.length; i++){
            foodCard = document.createElement('div')

            foodTitle = document.createElement('h2')
            foodTitle.textContent = foods[i].name
            foodTitle.classList.add('foodList')

            foodImg = document.createElement('img')
            foodImg.src=foods[i].image
            
            foodCard.appendChild(foodTitle)
            foodCard.appendChild(foodImg)
            container.appendChild(foodCard);
        }
        
        //add menu container to content div
        content.appendChild(container);
    }
}
export {makeMenuPage}