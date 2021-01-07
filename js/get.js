export async function getData(config){

    const {orientation,count,apiKey,query} = config

    const url = `https://api.unsplash.com/photos/random?${query?'query='+query+'&':''}orientation=${orientation}&count=${count}&client_id=${apiKey}`
    console.log(url)
    const response = await fetch(url),
          data     = await response.json()

    return data
}