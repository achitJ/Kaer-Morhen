function vDom() {
  function Node(tagName) {
    this.tagName = tagName
    this.parentNode = null
    this.children = []
  }

  vDom.prototype.createNewElement = function (tagName) {
    if (arguments.length > 1)
      return console.error(
        new Error('createNewElement can only take one argument')
      )

    if (arguments.length < 1)
      return console.error(new Error('createNewElement needs one argument'))

    if (typeof tagName !== 'string')
      return console.error(new Error('tagName must be a string'))

    return new Node(tagName)
  }

  Node.prototype.appendChild = function (childNode) {
    if (arguments.length > 1)
      return console.error(new Error('appendChild can only take one argument'))

    if (arguments.length < 1)
      return console.error(new Error('appendChild needs one argument'))

    if (!(childNode instanceof Node))
      return console.error(new Error('childNode must be a Node'))

    childNode.parentNode = this
    this.children.push(childNode)
  }

  Node.prototype.removeChild = function (childNode) {
    if (arguments.length > 1)
      return console.error(new Error('removeChild can only take one argument'))

    if (arguments.length < 1)
      return console.error(new Error('removeChild needs one argument'))

    if (!(childNode instanceof Node))
      return console.error(new Error('childNode must be a Node'))

    return this.children.filter((child) => child == childNode)
  }

  Node.prototype.childNodes = function () {
    return this.children
  }

  Node.prototype.parentNode = function () {
    return this.parentNode
  }

  const printDom = function (node, height) {
    if (!node) return

    console.log(`${'    '.repeat(height)}<${node.tagName}>`)

    node.children.forEach((child) => {
      printDom(child, height + 1)
    })

    console.log(`${'    '.repeat(height)}</${node.tagName}>`)
  }

  vDom.prototype.render = function () {
    printDom(this.document, 0)
  }

  this.document = new Node('html')
  this.document.appendChild(new Node('head'))
  this.document.appendChild(new Node('body'))
}

const myDom = new vDom()

const div1 = myDom.createNewElement('div')
const div2 = myDom.createNewElement('div')
const h1 = myDom.createNewElement('h1')
const p1 = myDom.createNewElement('p')

const body = myDom.document.childNodes()[1]
body.appendChild(div1)
body.appendChild(div2)
div1.appendChild(h1)
div1.appendChild(p1)

myDom.render()
