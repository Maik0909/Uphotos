
export function generalErrorHandler(error) {
    window.carousel.innerHTML= 
    `<p class="alert__message"> 👀 Hey someone made many requests to the server!
    <br>Please reload and try it again</p>`

}

export const isMobile = () => 
    Array.isArray(navigator.userAgent.match(/(iPhone|iPad|Android|webOS|IEMobile|Opera Mini)/i))

export function sortApiKeys(keys){ 
    return keys.sort( () => Math.random() - 0.5)
} 

export function chooseLoadingTime(segsM,segsW,prop) {
    return isMobile() ? segsM[prop] : segsW[prop]
}