import {evalConnection} from './configs.js'

const buildElement = (item,i) => {
    const {user,urls,links,alt_description} = item
    const content = 
        `<a href="${links.download}" target="_blank" >
            <div id="element${i}" class="carousel__container__item ${i%2?'blink__animation__two':'blink__animation__one'} ">
            <img class="carousel__item__img img__hidden" src="${evalConnection(urls)}" loading="lazy" alt="${alt_description}">
            <div class="carousel__item__details">
                <p class="carousel__item__details__title">${!user.location?'worlwide':user.location}</p>
                <p class="carousel__item__details__subtitle">${user.name}</p>
            </div>
        </a>`
    return content
}

const renderElement = (item,i) => {
    window.carouselContainer.innerHTML += buildElement(item,i)
}

const segs = { 
    '4g': 1500,
    '3g': 3000,
    '2g': 6000,
}


const render = async(list) => {
    await list.forEach(renderElement)
    setTimeout(() =>  window.spinner.classList.remove('spinner__active') , 4000)
    setTimeout(() => {
        const [...carouselItems] = document.getElementsByClassName('carousel__container__item')
        const [...carouselImages] = document.getElementsByClassName('carousel__item__img')
        console.log(carouselItems)
        carouselItems.forEach((item,i)=> {
            item.classList.contains('blink__animation__two') ?
            item.classList.remove('blink__animation__two'):
            item.classList.remove('blink__animation__one')
            carouselImages[i].classList.remove('img__hidden')
        })
    }, segs[navigator.connection.effectiveType])
   
}


export {render}