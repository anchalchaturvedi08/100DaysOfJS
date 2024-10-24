const panel = document.querySelectorAll('.panel');

panel.forEach(panel => {
    panel.addEventListener('click',() => {
        removeingActiveClass();
        panel.classList.add('active')
    })
})

function removeingActiveClass(){
    panel.forEach(panel => {
        panel.classList.remove('active')
    })
}