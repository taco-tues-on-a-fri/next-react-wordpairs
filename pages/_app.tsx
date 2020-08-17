import React from 'react'
import { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/fonts.css'

const WordpairApp = ({ Component, pageProps}: AppProps): JSX.Element => {
  
  return <Component {...pageProps} />
}

export default WordpairApp