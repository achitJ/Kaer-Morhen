window.addEventListener('click', init)

const dragon = document.querySelector('#dragon')
const dragonDiv = document.querySelector('.dragon')

function init() {
  window.addEventListener('keydown', moveDragon)
}

function moveDragon(e) {
  const dragonRect = dragon.getBoundingClientRect()
  const bodyRect = document.documentElement.getBoundingClientRect()

  if (e.key === 'ArrowRight') moveDirection('right', dragonRect, bodyRect)
  if (e.key === 'ArrowLeft') moveDirection('left', dragonRect, bodyRect)
}

function moveDirection(direction, dragonRect, bodyRect) {
  if (direction === 'right' && dragonRect.right < bodyRect.right) {
    dragon.className = 'dragon flip-dragon-right'
    dragonDiv.style.transform = `translateX(${dragonRect.x + 10}px)`
  }

  if (direction === 'left' && dragonRect.left > bodyRect.left) {
    dragon.className = 'dragon flip-dragon-left'
    dragonDiv.style.transform = `translateX(${dragonRect.x - 15}px)`
  }
}
