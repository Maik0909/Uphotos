import './js/default.js'
import {config} from './js/configs.js'
import {getData} from './js/get.js'
import { render } from './js/render.js'

// console.log(navigator.connection.downlink)
console.log(navigator.connection)

const {spinner,carousel} =  window
let nRequests = 8,
    percentage = 0.2

const customSearch = {
    ...config,
}

const searchBar = window['search-bar']

function search(event) {
    nRequests += 8 
    event.preventDefault()
    spinner.classList.add('spinner__active')

    window.carouselContainer.innerHTML = ''

    const title =  new FormData(this).get('title').trim()
    if(!title) return

    customSearch.query = title
    getData(customSearch).then(render)

}

function loadByScroll(){
    const scrolling = this.scrollLeft
    console.log(scrolling,this.scrollWidth)

    if(scrolling > Math.round(this.scrollWidth*percentage) && nRequests<45 ) {
        percentage+=0.1
        nRequests += 8
        spinner.classList.add('spinner__active')
        getData(customSearch)
            .then(render) 
            .catch(error => console.log('ERROR!',error))

    }  

}
carousel.addEventListener('scroll', loadByScroll)

searchBar.addEventListener('submit',search)


