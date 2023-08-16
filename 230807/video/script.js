const video = document.getElementById('video')
console.log(video.paused)
video.removeAttribute('controls')
video.addEventListener('click', () => {
    if(video.paused){
        video.play()
    } else {
        video.pause()
    }
})

video.addEventListener('mouseenter', () => {
    if(video.paused){
        video.play()
    }
})

video.addEventListener('mouseleave', () => {
    if(!video.paused){
        video.pause()
    }
})

const videos = document.getElementById('video_2')
console.log(videos.paused)
videos.removeAttribute('controls')
video.addEventListener('click', () => {
    if(videos.paused){
        videos.play()
    } else {
        videos.pause()
    }
})

videos.addEventListener('mouseenter', () => {
    if(videos.paused){
        videos.play()
    }
})

videos.addEventListener('mouseleave', () => {
    if(!video.paused){
        video.pause()
    }
})