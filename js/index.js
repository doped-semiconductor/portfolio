window.onload = () => {
    var i = document.getElementById('i')
    var b = document.getElementById('p')
    b.addEventListener('click', (ev) => {
        if(window.innerHeight > window.innerWidth){
            i.setAttribute('style','transform: scale(14) translateY(14%) translateX(-5%);')
        }
        else{
            i.setAttribute('style','transform: scale(10) translateX(-20%) translateY(15%);')
        }
        i.addEventListener('transitionend', () => {
            window.open('projects.html','_self')
        })
                   
    })
}