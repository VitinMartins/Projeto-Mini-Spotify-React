import React, { useEffect } from 'react'
import './CardDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function CardDetail(props) {

    const {id} = useParams()
    const [playlist, setPlaylist] = React.useState(null)
    const [musics, setMusics] = React.useState([])

    const getPlaylist = async() => {
        const response = await axios.get(`http://localhost:3001/playlists/${id}`)
        setPlaylist(response.data)
    }

    const getMusics = async() => {
        const response = await axios.get(`http://localhost:3001/playlists/${id}/music_playlist?_expand=msc`)
        let musics = []
        response.data.map(musicPlaylist => musics.push(musicPlaylist.msc))
        setMusics(musics)
    }

    useEffect(()=>{
        getPlaylist()
        getMusics()
    }, [])

    const carregarImagem = () => playlist !== null ? require('../../' + playlist.image) : '';

  return (
    <>
    <div id='container'>
        <img id='img-cover' src={carregarImagem()} alt='cover'></img>
        <ul id='list-playlist'>
            {musics.map( music =>
                <li className='item-playlist'>
                    <h3>{music.title}</h3>
                    <span>{music.author}</span>
                    <audio src={require('../../'+music.audio)} controls></audio>
                </li>
            )}
        </ul>
    </div>
    <button>Editar</button>
    </>
  )
}