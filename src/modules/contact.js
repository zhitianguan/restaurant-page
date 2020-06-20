import '../../node_modules/animate.css/animate.css'
function makeContactPage () {
    const content = document.querySelector('div#content')
    if (!content.querySelector('#contact')){
        //if a page has already loaded before, remove it first before adding new content
        if (content.querySelector(".textContainer")){
          const oldContainer = content.querySelector(".textContainer")
          content.removeChild(oldContainer)
        }

        //create contact page container
        const container = document.createElement('div')
        container.classList.add('textContainer');
        container.classList.add('animate__animated', 'animate__fadeIn')
        container.id = "contact"

        //create contact page elemnts
        const title = document.createElement('h1')
        title.textContent = "Contact Info"

        const phone = document.createElement('p')
        phone.textContent = "Phone #: 123-456-7890"

        const email = document.createElement('p')
        email.textContent = "Email: notAEmail@gmail.com"

        const line = document.createElement('hr')

        const formTitle = document.createElement('h1')
        formTitle.textContent = "Message Us"

        const nameInput = document.createElement('p')
        nameInput.innerHTML = '<label for="name">Name: </label><input type="text" name="name" id="name"><br>'
    
        const emailInput = document.createElement('p')
        emailInput.innerHTML = '<label for="title">Email: </label><input type="text" name="email" id="email"> <br>'

        const msgInput = document.createElement('p')
        msgInput.innerHTML = '<label for="msg">Message: </label><textarea name="msg" id="msg" cols="40" rows="5"></textarea><br>'

        const submitBtn = document.createElement('button')
        submitBtn.type = "button"
        submitBtn.id = "submit"
        submitBtn.textContent = "Submit"
        
        //add element to content container 
        container.appendChild(title)
        container.appendChild(phone)
        container.appendChild(email)
        container.appendChild(line)
        container.appendChild(formTitle)
        container.appendChild(nameInput)
        container.appendChild(emailInput)
        container.appendChild(msgInput)
        container.appendChild(submitBtn)

        //add contact page container to content div
        content.appendChild(container);
    }
}
export {makeContactPage}