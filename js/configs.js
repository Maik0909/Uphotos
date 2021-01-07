
export const apiKeys = [
    'SdKMNrqT3rbp5cmiQ5Izo8WK0eGSWq0Oqq_fa7CgONc',
    'zNXc0vhJcx1uM5ohBpEezSBB1qNOn1MZQHX9D0yeC_c',
    'gizSpqzRyvF-MwrVnh7CRDCrUH3il2v5EAqf8I5SrK0',
]

export const config = {
    orientation: 'portrait',
    count: 8,
    apiKey: apiKeys[2]
}

export const evalConnection = (urls) => {

    const {effectiveType} = navigator.connection
    
    if( effectiveType == '4g' ) return urls.regular
    else if(effectiveType == '3g') return urls.small
    else return urls.thumb
    
    
}

