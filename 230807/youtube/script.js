const iframe = document.getElementById('.youtube')
console.log(iframe.paused)
iframe.removeAttribute('controls')
iframe.addEventListener('click', () => {
    if(iframe.paused){
        iframe.play()
    } else {
        iframe.pause()
    }
})

iframe.addEventListener('mouseenter', () => {
    if(iframe.paused){
        iframe.play()
    }
})

iframe.addEventListener('mouseleave', () => {
    if(!iframe.paused){
        iframe.pause()
    }
})