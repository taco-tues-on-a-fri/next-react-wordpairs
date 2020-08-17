import React, { Fragment } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

type Props = {
  props?: any
}

const Home: NextPage<Props> = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Word Pairs</div>
    </div>
  )
}

export default Home