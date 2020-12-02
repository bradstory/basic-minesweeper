document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let width = 4
    let squares = []
    let itAmount = 1
    let isGameOver = false


    //creation of the board
    function createBoard() {
        //get shuffled game with random "it" square
        const itArray = Array(itAmount).fill('it')
        const emptyArray = Array(width*width - itAmount).fill('valid')
        // console.log(itArray)
        // console.log(emptyArray)
        const gameArray = emptyArray.concat(itArray)
        // console.log(gameArray)
        const shuffledArray = gameArray.sort(() => Math.random() -0.5)
        // console.log(shuffledArray)

        for(let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            square.setAttribute('id', i)
            //adds random class to squares from the shuffled Array
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)
        
        //regular click
        square.addEventListener('click', function(e) {
            click(square)
        })
      
    }



    }
    createBoard()

// add flag
// function addFlag(square) {
//     if (isGameOver) return
//     if (!square.classList.contains('checked') && (flags < itAmount)) {
//         if (!square.classList.contains('flag')) {
//             square.classList.add('flag')
//             square.innerHTML = '🚩'
//             flags ++
//         }
//     }
// }
 
//click on square actions
function click(square) {
    if (isGameOver) return
    if (square.classList.contains('checked') || square.classList.contains('flag')) return
    if (square.classList.contains('it')) {
        gameOver(square)
    }
    if (square.classList.contains('it')) {
        square.classList.add('lose')

    }else{
        square.classList.add('checked')
        square.innerHTML = '🚩'
    }
    
}
//game over
function gameOver(square) {
    console.log('BOOM! Game Over!')
    isGameOver = true
    square.innerHTML = '💣'
    let boda = document.querySelectorAll('.checked')
    console.log(boda)
    let bodarray = Array.from(boda)
    console.log(bodarray)

    for (i = 0; i < bodarray.length; i++) {
        bodarray[i].classList.add('yellowTrail')
    }
}

})
