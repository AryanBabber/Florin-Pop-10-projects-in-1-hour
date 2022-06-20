const button = document.getElementById('button')
const container = document.getElementById('container')

button.addEventListener('click',()=>{
    setNotification();
})

function setNotification(){
    const notif = document.createElement('div')
    notif.classList.add('toast')

    container.appendChild(notif)

    notif.innerText = `Hello There\nGeneral Kenobi?!!?`
    setTimeout(()=>{
        notif.remove();
    },2000)
}