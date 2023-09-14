/**
 * EXAMINE THE DOCUMENT OBJECT
 * */

// console.log('Document:', document)
// console.log('Domain:', document.domain)
// console.log('URL:', document.URL)
// console.log('Title:', document.title)
// document.title = 123
// console.log('Doctype:', document.doctype)
// console.log('head:',  document.head)
// console.log('body:', document.body)
// console.log('all:', document.all)
// console.log('html:',document.all[0])
// console.log(document.all[10])
// document.all[10].textContent = 'Hello'
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)




/**
 * GETELEMENTBYID
 * */
// console.log('Header Elements:', document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title')
// const header = document.getElementById('main-header')
// console.log('Header Title:', headerTitle)
// headerTitle.textContent = 'Hello'
// console.log(headerTitle.textContent)
// headerTitle.innerText = 'Goodbye'
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h5>Hello</h5>'
// header.style.borderBottom = 'solid 3px #000'




/**
 * GETELEMENTBYCLASSNAME
 * */

// const items = document.getElementsByClassName('list-group-item')
// console.log('Collection of list group items:', items)
// console.log('First list item:', items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// // items.style.backgroundColor = '#f4f4f4'     // gives error

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }



/**
 * GETELEMENTSBYTAGNAME,same classname
 * */

// const li = document.getElementsByTagName('li')
// console.log('Collection of list items:', li)
// console.log('First list item:', li[1])
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// // li.style.backgroundColor = '#f4f4f4'     // gives error

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }


/**
 * QUERYSELECTOR
 * */
// const header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// const input = document.querySelector('input')
// input.value = 'Hello World!'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// const item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'blue'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'coral'



/**
 * QUERYSELECTORALL
 * */

// const titles = document.querySelectorAll('.title')

// console.log('Titles:', titles);
// titles[0].textContent = 'Hello'

// const odd = document.querySelectorAll('li:nth-child(odd)')
// const even = document.querySelectorAll('li:nth-child(even)')

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }



/**
 * TRAVERSING THE DOM
 * */
// const itemList = document.querySelector('#items')
// console.log('Parent node:', itemList.parentNode)    // parentNode
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log('Greate grandparent node:', itemList.parentNode.parentNode.parentNode)

// console.log('Parent Element:', itemList.parentElement)    // parentElement
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log('Great grandparent element:', itemList.parentElement.parentElement.parentElement)

// console.log('Child nodes:', itemList.childNodes)

// console.log('Children items:', itemList.children)
// console.log('First child:', itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'

// console.log('First Child:', itemList.firstChild)    // firstChild
// console.log('First Element child:', itemList.firstElementChild)    // firstElementChild
// itemList.firstElementChild.textContent = 'Hello 1'

// console.log('Last Child:', itemList.lastChild)    // lastChild
// console.log('Last Element child:', itemList.lastElementChild)    // lastElementChild
// itemList.lastElementChild.textContent = 'Hello 1'

// console.log('Next Sibling child:',itemList.nextSibling)    // nextSibling
// console.log('Next Element sibling:',itemList.nextElementSibling)    // nextElementSibling
// itemList.nextElementSibling.textContent = 'Hello 1'

// console.log('Previous Sibling:', itemList.previousSibling)    // previousSibling
// console.log('Previous Element Sibling:', itemList.previousElementSibling)    // previousElementSibling
// itemList.previousElementSibling.textContent = 'Hello 1'


/**
 * Create Element
 * */

// Create a div
// const newDiv = document.createElement('div')

// // Add class
// newDiv.className = 'hello'

// // Add id
// newDiv.id = 'hello1'

// // Add attr
// newDiv.setAttribute('title', 'Hello Div')

// // Create text node
// const newDivText = document.createTextNode('Hello World')

// // Add text to div
// newDiv.appendChild(newDivText)

// console.log('New Div Text', newDivText)


// const container = document.querySelector('header .container')
// const h1 = document.querySelector('header h1')

// console.log('New Div', newDiv)

// newDiv.style.fontSize = '30px'

// container.insertBefore(newDiv, h1)

/**
 * EVENT LISTENERS
 * */
// const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
    // console.log('Button Clicked!');
    // document.getElementById('header-title').textContent = 'Changed!'
    // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    // console.log('Event:', e)
    // console.log('Target Element:', e.target)
    // console.log('Target id:', e.target.id)
    // console.log('Target className', e.target.className)
    // console.log('Target class list:', e.target.classList)
    // const output = document.getElementById('output')
    // output.innerHTML = '<h3>' + e.target.id + '</h3>'
    // console.log('Event Type:', e.type)

    // Client is from the window
    // console.log('Client X:', e.clientX)
    // console.log('Client Y:', e.clientY)

    // Offset is from the actual element
    // console.log('Offset X:', e.offsetX)
    // console.log('Offset Y:', e.offsetY)

    // console.log('Alt Key', e.altKey)
    // console.log('Ctrl Key', e.ctrlKey)
    // console.log('Shift Key', e.shiftKey)
}

const button = document.getElementById('button')
const box = document.getElementById('box')

// button.addEventListener('click', runEvent)
// button.addEventListener('dblClick', runEvent)
// button.addEventListener('mousedown', runEvent)
// button.addEventListener('mouseup', runEvent)

/**
 * Mouse Events
 * */
// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)
// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)

// const itemInput = document.querySelector('input[type="text"]')

// function runEvent(e) {
    // console.log('EVENT TYPE: ' + e.type)
    // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>'

    // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"

    // console.log(e.target.value)
    // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>'
// }




/**
 * Keyboard Events
 * */
// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)

/**
 * Other Events
 * */
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)


/**
 * Input and select
 * */
// itemInput.addEventListener('input', runEvent)
// const select = document.querySelector('select')

// select.addEventListener('change', runEvent)


/**
 * Submit Event
 * */
// const form = document.querySelector('form')

// form.addEventListener('submit', runEvent)
