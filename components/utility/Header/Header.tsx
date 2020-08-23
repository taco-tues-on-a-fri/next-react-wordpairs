import React, { FC } from 'react'
import Head from 'next/head'

export const Header: FC = () => {
  return (
    <Head>
      <title>Word Pairs</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}