import React, { useEffect } from 'react'
import './CardDetail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function CardDetail(props) {

    const { id } = useParams()
    const [playlist, setPlaylist] = React.useState(null)
    const [musics, setMusics] = React.useState([])

    const [displayForm, setDisplayForm] = React.useState(false)

    const [selectedImage, setSelectedImage] = React.useState('');
    const [selectedMusics, setSelectedMusics] = React.useState([]);
    const [listSelectMusics, setSelectMusics] = React.useState([])
    const [playlistName, setPlaylistName] = React.useState('')


    const handleImageChange = (e) => {
        setSelectedImage(e.target.value);
    };

    const handleSongChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedMusics(selectedOptions);
    };

    const listMusics = async () => {
        const response = await axios.get(`http://localhost:3001/mscs`)
        setSelectMusics(response.data)
    }

    const getPlaylist = async () => {
        const response = await axios.get(`http://localhost:3001/playlists/${id}`)
        setPlaylist(response.data)
        setPlaylistName(response.data.name)
    }

    const handleNameChange = async (e) => {
        setPlaylistName(e.target.value)
    }

    const showForm = () => {
        setDisplayForm(!displayForm)
    }

    const getMusics = async () => {
        const response = await axios.get(`http://localhost:3001/playlists/${id}/music_playlist?_expand=msc`)
        let musics = []
        response.data.map(musicPlaylist => musics.push(musicPlaylist.msc))
        setMusics(musics)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/playlists/${id}`, {
            "id": playlist.id,
            "image": playlist.image,
            "name": playlistName,
            "userId": playlist.userId
        })
        await axios.post()
        getPlaylist()
    }

    useEffect(() => {
        getPlaylist()
        getMusics()
        listMusics()
    }, [])

    const carregarImagem = () => playlist !== null ? require('../../' + playlist.image) : '';

    return (
        <>
            <div id='container'>
                <img id='img-cover' src={carregarImagem()} alt='cover'></img>
                <ul id='list-playlist'>
                    {musics.map(music =>
                        <li className='item-playlist'>
                            <h3>{music.title}</h3>
                            <span>{music.author}</span>
                            <audio src={require('../../' + music.audio)} controls></audio>
                        </li>
                    )}
                </ul>
            </div>
            <button onClick={showForm}>Editar</button>
            {
                displayForm &&
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome da Playlist:
                        <input type="text" value={playlistName} onChange={handleNameChange} />
                    </label>
                    <br />

                    <label>
                        Selecione Músicas para adicionar:
                        <select multiple value={selectedMusics} onChange={handleSongChange}>
                            {listSelectMusics.map(music => <option value={music.id}>{music.title}</option>)}
                        </select>
                    </label>
                    <br />

                    <button type="submit">atualizar</button>
                </form>

            }
            <button>remover musica</button>
        </>
    )
}