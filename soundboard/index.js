const sounds = [
    'applause',
    'boos',
    'groove',
    'beatz',
    'gasp',
    'ratatat'
]

sounds.forEach((sound)=>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    document.body.appendChild(btn)
    btn.addEventListener('click', ()=>{
        stopSound();
        document.getElementById(sound).play()
    })
})

const stopSound = ()=>{
    sounds.forEach((sound)=>{
        document.getElementById(sound).pause()
    })
}