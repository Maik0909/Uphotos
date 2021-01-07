import './js/default.js'
import {config} from './js/configs.js'
import {getData} from './js/get.js'
import { render } from './js/render.js'
import {generalErrorHandler} from './js/utils.js'
// console.log(navigator.connection.downlink)

const {spinner,carousel} =  window
let percentage = 0.2

const customSearch = {
    ...config,
}

const searchBar = window['search-bar']

function search(event) { 
    event.preventDefault()
    spinner.classList.add('spinner__active')

    window.carouselContainer.innerHTML = ''

    const title =  new FormData(this).get('title').trim()
    if(!title) return

    customSearch.query = title
    getData(customSearch).then(render).catch(generalErrorHandler)
    carousel.addEventListener('scroll', loadByScroll)


}

function loadByScroll(){
    const scrolling = this.scrollLeft

    if(scrolling > Math.round(this.scrollWidth*percentage) ) {
        percentage+=0.15
        spinner.classList.add('spinner__active')
        getData(customSearch).then(render) 
    }  

}
carousel.addEventListener('scroll', loadByScroll)

searchBar.addEventListener('submit',search)


