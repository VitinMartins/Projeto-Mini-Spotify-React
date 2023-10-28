import React from 'react'
import Card from '../Card/Card'
import './CardContainer.css'
import { playlists } from '../../DataBase'
import Carousel from 'react-elastic-carousel'


const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 4},
]

export default function CardContainer() {
  return (
    <Carousel className='content-menu' breakPoints={breakPoints}>
      {playlists.map(playlist => <Card img={playlist.image} name={playlist.name}></Card>)}
    </Carousel>
  )
}

