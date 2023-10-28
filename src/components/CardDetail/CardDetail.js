import React from 'react'
import './CardDetail.css'
import { useParams } from 'react-router-dom'
import { playlists } from '../../DataBase'


export default function CardDetail(props) {

    let {name} = useParams()

    let playlist
    for(let i = 0; i < playlists.length; i++){
        if (playlists[i].name === name){
            playlist = playlists[i]
        }
    }

    let musics = []
    for(let i = 0; i < playlist.musics.length; i++){
        musics.push(
            <li className='item-playlist'>
                <h3>{playlist.musics[i].title}</h3>
                <span>{playlist.musics[i].author}</span>
                <audio src={playlist.musics[i].audio} controls></audio>
            </li>
        )
    }

  return (
    <div id='container'>
        <img id='img-cover' src={playlist.image} alt='cover'></img>
        <ul id='list-playlist'>
            {musics}
        </ul>
    </div>
  )
}