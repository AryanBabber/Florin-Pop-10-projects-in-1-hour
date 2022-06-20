const container = document.getElementById('container')

const img = document.querySelector('img')

container.addEventListener('mousemove',(e)=>{
    let xAxis = e.clientX - e.target.offsetLeft
    let yAxis = e.clientY - e.target.offsetTop

    img.style.transformOrigin = `${xAxis}px ${yAxis}px`
    img.style.transform = `scale(1.50)`
})

container.addEventListener('mouseleave',()=>{
    img.style.transformOrigin = `center center`
    img.style.transform = `scale(1)`
})