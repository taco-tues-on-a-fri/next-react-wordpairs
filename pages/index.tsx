import React, { Fragment } from 'react'
import { NextPage } from 'next'
import { Header } from '../components/utility/Header'
import { MainPage } from '../components/pages/MainPage'
import styles from '../styles/Home.module.css'

type Props = {
  props?: any
}

const Home: NextPage<Props> = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
    </Fragment>
  )
}

export default Home