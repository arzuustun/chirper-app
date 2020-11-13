import thunk from 'redux-thunk'
import logger from './logger'
import { applyMiddleware } from 'redux'

//sırası önemli  thunk ile tweetleri kaydetmek degistirmek icin kullanuruz sonra logger a gider fonksiyonları calıstırır reducera gecmek icin actionlar elde eder
export default applyMiddleware(
  thunk,
  logger,
) 