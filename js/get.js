import { apiKeys } from "./configs.js"
import {sortApiKeys} from "./utils.js"

export async function getData(config){

    let {orientation,count,apiKey,query} = config

    apiKey = sortApiKeys(apiKeys)[0]

    const url = `https://api.unsplash.com/photos/random?${query?'query='+query+'&':''}orientation=${orientation}&count=${count}&client_id=${apiKey}`
    const response = await fetch(url)
    const data     = await response.json()

    return data
}