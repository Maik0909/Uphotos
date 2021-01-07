
export const apiKeys = [
    'SdKMNrqT3rbp5cmiQ5Izo8WK0eGSWq0Oqq_fa7CgONc',
    'zNXc0vhJcx1uM5ohBpEezSBB1qNOn1MZQHX9D0yeC_c',
    'gizSpqzRyvF-MwrVnh7CRDCrUH3il2v5EAqf8I5SrK0',
    'KidtuCirYU-PDf8xwEKJinmFzeMVhPjcA6coD3ZY7JQ',
    'cqSd10R16VhhmqF57Mc9Uzo-aEhvGNJutdz8STkU2CI',
    'j5zBvvVJYJ3xfeLfuNow47YQDh9hXdf9KVF39Pk22NM'
]

export const config = {
    orientation: 'portrait',
    count: 8,
    apiKey: apiKeys[0]
}

export const evalConnection = (urls) => {

    const {effectiveType} = navigator.connection
    
    if( effectiveType == '4g' ) return urls.regular
    else if(effectiveType == '3g') return urls.small
    else return urls.thumb
    
    
}

