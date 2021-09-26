

const designBoxes = document.querySelectorAll('.design')

window.addEventListener('scroll', scrollBox)

scrollBox()

function scrollBox() {
    const scrollDown = window.innerHeight / 5*4 
    designBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < scrollDown)
        {
            box.classList.add('show')
        } else 
        {
            box.classList.remove('show')
        }
    })
}



const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const navbar = document.querySelector('.navbar-open')

openBtn.addEventListener('click', () => navbar.classList.add('visible'))
closeBtn.addEventListener('click', () => navbar.classList.remove('visible'))

