import React, { useEffect } from 'react'
import Card from '../Card/Card'
import './CardContainer.css'
import Carousel from 'react-elastic-carousel'
import axios from 'axios'
import { Link } from 'react-router-dom'


const breakPoints = [
  { width: 1, itemsToShow: 1},
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 3},
  { width: 1200, itemsToShow: 4},
]

export default function CardContainer() {

  const [playlists, setPlaylists] = React.useState([])


  const getPlaylists = async() => {
    var userId = localStorage.getItem('userId')
    
    if (userId == null) userId = 0

    const response = await axios.get(`http://localhost:3001/users/${userId}/playlists`)
    setPlaylists(response.data)
  }

  useEffect(()=>{
    getPlaylists()
  }, [])
  
  return (
    <>
      <Link to={'/playlists/add'}><button>Nova Playlist</button></Link>
      <Carousel className='content-menu' breakPoints={breakPoints}>
        {playlists.map(playlist => <Card key={playlist.id} img={require('../../'+playlist.image)} id={playlist.id} name={playlist.name}></Card>)}
      </Carousel>
    </>
  )
}