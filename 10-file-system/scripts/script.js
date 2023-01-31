import { files } from './data.js'

window.addEventListener('load', init)

let fileBar = document.querySelector('#file-nav')
const doc = new DOMParser()

function init() {
  makeFiles(files)
  document.querySelector('#file-nav').addEventListener('click', folderInteract)
}

function createDiv(divType, name) {
  if (divType === 'ul') {
    const ul = document.createElement('ul')

    ul.classList.add('folder')

    return ul
  }

  let newDiv

  if (name.endsWith('.html')) {
    newDiv = doc.parseFromString(
      `<${divType} class="${name}"> <i class="fa-brands fa-html5"></i>${name}</${divType}>`,
      'text/html'
    ).body.childNodes[0]
  } else if (name.endsWith('.js')) {
    newDiv = doc.parseFromString(
      `<${divType} class="${name}"> <i class="fa-brands fa-js"></i>${name}</${divType}>`,
      'text/html'
    ).body.childNodes[0]
  } else if (name.endsWith('.css')) {
    newDiv = doc.parseFromString(
      `<${divType} class="${name}"> <i class="fa-brands fa-css3-alt"></i>${name}</${divType}>`,
      'text/html'
    ).body.childNodes[0]
  } else {
    newDiv = doc.parseFromString(
      `<${divType} class="${name}"> ${name}</${divType}>`,
      'text/html'
    ).body.childNodes[0]
  }

  return newDiv
}

function folderInteract(e) {
  if (e.target.tagName !== 'LI') return

  const nextNode = e.target.nextElementSibling

  if (nextNode && nextNode.classList.contains('folder')) {
    nextNode.classList.toggle('collapse')
  }
}

function makeFiles(file, parentNode = null) {
  if (parentNode === null) {
    const mainList = createDiv('ul')
    const currNode = createDiv('li', file.name)
    const newList = createDiv('ul')

    mainList.appendChild(currNode)
    fileBar.appendChild(mainList)
    mainList.appendChild(newList)

    for (const currFile of file.items) {
      makeFiles(currFile, newList)
    }

    return
  }
  if (!file.isFolder) {
    const currNode = createDiv('li', file.name)

    parentNode.appendChild(currNode)

    return currNode
  } else {
    const currNode = createDiv('li', file.name)
    parentNode.appendChild(currNode)

    const newList = createDiv('ul')

    for (const currFile of file.items) {
      makeFiles(currFile, newList)
    }

    parentNode.appendChild(newList)

    return currNode
  }
}
