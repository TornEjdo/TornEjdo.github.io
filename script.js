const buttons = document.querySelectorAll('.ripple')

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




