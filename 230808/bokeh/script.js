const wrapper = document.querySelector('.wrapper')
const addBokeh = () => {
    const bokeh = document.createElement('span')
    bokeh.classList.add('bokeh')
    bokeh.style.left = Math.floor(Math.random() * (100 - 1) + 1) + '%'
    bokeh.style.top = Math.floor(Math.random() * (100 - 1) + 1) + '%'
    bokeh.style.filter = 'blur('+Math.floor(Math.random() * (5 - 2) + 2) + 'px)'
    bokeh.style.width = Math.floor(Math.random(120 - 50) + 50) + 'px'
    bokeh.style.height = Math.floor(Math.random(120 - 50) + 50) + 'px'
    bokeh.style.opacity = Math.random()
    wrapper.append(bokeh)

}

for(let i = 0; i < 60; i++){
    addBokeh()
}