window.addEventListener('load', bindEvents)

const modal = document.querySelector('.modal')

function bindEvents() {
  document.querySelector('.modal').addEventListener('click', handleModal)
  document.querySelector('#showModal').addEventListener('click', () => {
    modal.style.display = 'block'
  })
}

const handleModal = function (event) {
  if (event.target.className === 'modal') {
    modal.style.display = 'none'
  }
}
