import React, { FC, Fragment } from 'react'
import styles from './MainPage.module.css'

type Props = {
  props?: any
}

// Fischer-Yates Shuffle while loop
const shuffleArray = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle
  while (0 !== currentIndex) {
    
    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * (currentIndex + 1))
    currentIndex -=1

    // And swap it with the current element
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export const MainPage: FC = () => {
  return (
    <div className="title">
      <div>Word Pairs</div>
    </div>
  )
}