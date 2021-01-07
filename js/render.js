import {evalConnection} from './configs.js'
import {chooseLoadingTime} from './utils.js'

const buildElement = (item,i) => {
    const {user,urls,links,alt_description} = item
    const content = 
        `<a href="${links.download}" class="carousel__container__link"target="_blank" >
            <div class="carousel__container__item ${i%2?'blink__animation__two':'blink__animation__one'} ">
            <img class="carousel__item__img " src="${evalConnection(urls)}" loading="lazy" alt="${alt_description}">
            <div class="carousel__item__details">
                <p class="carousel__item__details__title">${!user.location?'Worlwide':user.location}</p>
                <p class="carousel__item__details__subtitle">${user.name}</p>
            </div>
        </a>`
    return content
}

const renderElement = (item,i) => {
    window.carouselContainer.innerHTML += buildElement(item,i)
}

const segsMobile = { 
    '4g': 3000,
    '3g': 4000,
    '2g': 7000,
}

const segsWeb = {
   '4g': 2000,
   '3g': 3000,
   '2g': 6000,
}


const render = async(list) => {
    await list.forEach(renderElement)
    setTimeout(() =>  window.spinner.classList.remove('spinner__active') , 4000)
    setTimeout(() => {
        const [...carouselItems] = document.getElementsByClassName('carousel__container__item')
        const [...carouselImages] = document.getElementsByClassName('carousel__item__img')
  
       
        carouselItems.forEach((item,i)=> {

            item.classList.contains('blink__animation__two') ?
                item.classList.remove('blink__animation__two'):
            item.classList.contains('blink__animation__one') ?
                item.classList.remove('blink__animation__one') : ''
           
            if(!carouselImages[i].classList.contains('img__visible')) {
                carouselImages[i].classList.add('img__visible')
            }
         
        
        })
    }, chooseLoadingTime(segsMobile,segsWeb,navigator.connection.effectiveType) )
   
}


export {render}