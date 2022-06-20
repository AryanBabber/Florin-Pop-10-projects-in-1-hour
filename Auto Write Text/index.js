const container = document.getElementById('container')
const text = 'This is me trying to speak spanish...\nHola todos, estas bien mi hermanos y hermanas?'
// container.innerText = text
let index = 0
function writetext(){
    container.innerText = text.slice(0, index)
    index++
    if(index > text.length){
        index = 0
    }
}

setInterval(writetext,100)