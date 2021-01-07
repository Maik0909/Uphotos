import {render} from './render.js'
import {config as searchConfig} from './configs.js'
import {generalErrorHandler} from './utils.js'
import {getData} from './get.js'

getData(searchConfig)
    .then(render)
    .catch(generalErrorHandler)





