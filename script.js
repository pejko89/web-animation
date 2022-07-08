let textTag = document.querySelector('.section1 h1')
let text = textTag.textContent

let splitText = text.split('')

textTag.innerHTML = ''

splitText.forEach(e => {
    if (e === ' ')
        e = '&nbsp;'

    textTag.innerHTML += `<span>${e}</span>`
})

let spans = textTag.querySelectorAll('span')
let k = 0
let color = 'skyblue'

let interval = setInterval(() => {

    let singleSpan = spans[k]

    if (color === 'skyblue') {
        color = 'white'
    } else {
        color = 'skyblue'
    }

    singleSpan.style.color = color

    singleSpan.classList.add('fadeMove')

    k++

    if (k === spans.length) {
        clearInterval(interval)
    }
}, 70)

let borderLine = document.querySelector('.border-line')



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let animationWidth = 0

window.onscroll = () => {

    if (this.oldScroll > this.scrollY) {
        animationWidth -= 1.5
    } else {
        animationWidth += 1.5
    }

    if (animationWidth < 0)
        animationWidth = 0

    if (animationWidth > 100)
        animationWidth = 100

    borderLine.style.width = `${animationWidth}%`

    this.oldScroll = this.scrollY


    imageAnimation()

}

const imageAnimation = () => {

    let sectionForAnimation = document.querySelector('.section2 .images')
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight


    let leftImage = document.querySelector('.slideFromLeft')
    let rightImage = document.querySelector('.slideFromRight')


    if (sectionPosition < screenPosition) {
        leftImage.classList.add('animated')
        rightImage.classList.add('animated')
    }
}