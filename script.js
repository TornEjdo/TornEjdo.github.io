const buttons = document.querySelectorAll('.ripple')
const RANDOM_QUOTE_API_URL ='http://api.quotable.io/random'
const quoteDisplayElement = document.getElementById('output')

function getRandomQuote (){
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data=>data.content)
} 

async function getNextQuote(){
    const quote = await getRandomQuote()
    console.log(quote)
    output.innerText = quote
}

getNextQuote()




buttons.forEach(button => {
    button.addEventListener('click',function(b) {
        const x= b.clientX
        const y= b.clientY
        

        const buttonTop= b.target.offsetTop
        const buttonLeft = b.target.offsetLeft

        const xInside = x-buttonLeft
        const yInside = y-buttonTop

        console.log(xInside,yInside)

        const circle = document.createElement('span')
        circle.classList.add ('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        

        this.appendChild(circle)

        setTimeout(()=> circle.remove(),500)
    })
} )
document.getElementById("card3").addEventListener("click",openMenu);
function openMenu(){
    document.getElementById("dropdown").classList.toggle("active")
}




