const grid = document.querySelectorAll('.grid-item')
console.log(grid)

for(let i = 0; i < grid.length; i++){
    grid[i].addEventListener('click', () => {
        for(let j = 0; j < grid.length; j++){
            grid[j].classList.remove('active')
        }
        grid[i].classList.add('active')
    })
}