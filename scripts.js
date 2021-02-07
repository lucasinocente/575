let page = location.hash.split('#')[1] || 0
const [ article ] = document.getElementsByTagName('article')
const current = document.getElementById('current')
const total = document.getElementById('total')
const size = content.length - 1

const goToPage = page => {
  page = parseInt(page, 10) || 0

  if (page > size) {
    page = 0
  }

  if (page < 0) {
    page = size
  }

  article.innerText = content[page]
  current.innerText = page
  location.hash = page
}

const next = () => {
  page++
  location.hash = page
}

const prev = () => {
  event.preventDefault()
  page--
  location.hash = page
}

const handleHistory = ({ target: { location: { hash }}}) => {
  page = hash.split('#')[1]
  goToPage(page)
}

total.innerText = size
current.innerText = 0

goToPage(page)

window.onpopstate = event => handleHistory(event)
document.addEventListener('click', () => next());
document.oncontextmenu = event => prev()