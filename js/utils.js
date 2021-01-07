
export function generalErrorHandler(error) {
    window.carousel.innerHTML= 
    `<p class="alert__message"> 👀 Hey someone made many requests to the server!
    <br>Please reload and try it again</p>`

}


export function sortApiKeys(keys){ 
    return keys.sort( () => Math.random() - 0.5)
} 

export function chooseLoadingTime(segsM,segsW,prop) {
    const isMobile = navigator.userAgent.match(/(iPhone|iPad|Android|webOS|IEMobile|Opera Mini)/i)
    return Array.isArray(isMobile) ? segsM[prop] : segsW[prop]
}