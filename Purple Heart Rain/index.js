const createHeart = ()=>{
    const heart = document.createElement('div')
    heart.classList.add('heart')
    heart.style.left = Math.random() * 100 + 'vw'
    heart.innerHTML = '&#128156'
    // console.log(heart)
    document.body.appendChild(heart)
    
    setTimeout(()=>{
        heart.remove();
    }, 4000)
}

setInterval(createHeart,100)