const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let index = 0;

function carousel(){
    index++
    if(index > img.length - 1){
        index = 0
    }

    imgs.style.transform = `translateX(${-index*300}px)`
    setTimeout(carousel,2000)
}
carousel()
// setInterval(carousel,1000);