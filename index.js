//UI ELEMENTS

const aboutUsEl = document.getElementById('aboutUs')
const coursesEl = document.getElementById('Courses')
const ContactEl = document.getElementById('Contact')
const locationEl = document.getElementById('location')

let click = true

document.getElementById('hamburger').addEventListener('click', (e) => {
    if(click){
        renderHamburger()
        click = false
    }else {
        notRenderHamburger()
        click = true
    }
    
})


function renderHamburger(){
    document.getElementById('list').style.display = `flex`
}

function notRenderHamburger(){
    document.getElementById('list').style.display = `none`
}

function scrollFunctionOne(){
    aboutUsEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionTwo(){
    coursesEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionThree(){
    ContactEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}

function scrollFunctionFour(){
    locationEl.scrollIntoView({
        block:'start',
        behavior:'smooth',
        inline:'start'
    })
    notRenderHamburger()
}