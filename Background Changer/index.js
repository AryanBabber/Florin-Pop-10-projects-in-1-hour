const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    let bgcolor = document.body.style.background
    document.body.style.background = `hsl(${Math.floor(Math.random() * 360)},100%,50%)`
    console.log(document.body.style.background)
    btn.style.backgroundColor = document.body.style.background
})
