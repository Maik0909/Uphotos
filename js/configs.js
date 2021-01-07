export const config = {
    orientation: 'portrait',
    count: 8,
    apiKey: 'SdKMNrqT3rbp5cmiQ5Izo8WK0eGSWq0Oqq_fa7CgONc'
}

export const evalConnection = (urls) => {

    const {effectiveType} = navigator.connection
    
    if( effectiveType == '4g' ) return urls.regular
    else if(effectiveType == '3g') return urls.small
    else return urls.thumb
    
    
}

