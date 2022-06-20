const toggle = document.getElementById('toggle')

toggle.addEventListener('change',(e)=>{
    document.body.classList.toggle('dark', e.target.checked)
    document.body.classList.label('dark', e.target.checked)
})