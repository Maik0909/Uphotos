import { apiKeys } from "./configs.js"
import {sortApiKeys,isMobile} from "./utils.js"

export async function getData(config){

    let {orientation,count,apiKey,query} = config

    count = ( isMobile() && 5 ) || count
    apiKey = sortApiKeys(apiKeys)[Math.floor(Math.random()*apiKeys.length)+1]

    const url = `https://api.unsplash.com/photos/random?${query?'query='+query+'&':''}orientation=${orientation}&count=${count}&client_id=${apiKey}`
    const response = await fetch(url)
    const data     = await response.json()

    return data
}