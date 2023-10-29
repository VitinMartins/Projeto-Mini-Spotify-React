import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PlaylistForm() {
  const [playlistName, setPlaylistName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedMusics, setSelectedMusics] = useState([]);
  const [listSelectMusics, setSelectMusics] = useState([])

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.value);
  };

  const handleSongChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setSelectedMusics(selectedOptions);
  };

  const listMusics = async() =>{
    const response = await axios.get(`http://localhost:3001/mscs`)
    setSelectMusics(response.data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Nome da Playlist:', playlistName);
    console.log('Imagem selecionada:', selectedImage);
    console.log('Músicas selecionadas:', selectedMusics);

    var userId = localStorage.getItem('userId')
    
    if (userId == null) {
        alert('Voce prescisa estar logado')
        userId = 0
    }
    
    const playlist_resp = await axios.get(`http://localhost:3001/playlists`)
    let playlists = playlist_resp.data
    let nextId = playlists[playlists.length - 1].id + 1

    const respose = await axios.post(`http://localhost:3001/playlists`, {
        id: nextId,
        image: "assets/image/logo192.png",
        name: playlistName,
        userId: userId
    })

    console.log(respose.data)
  };

  useEffect(()=>{
    listMusics()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome da Playlist:
        <input type="text" value={playlistName} onChange={handleNameChange} />
      </label>
      <br />

      <label>
        Escolha uma Imagem:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />

      <label>
        Selecione Músicas:
        <select multiple value={selectedMusics} onChange={handleSongChange}>
            {listSelectMusics.map(music => <option value={music.id}>{music.title}</option>)}
        </select>
      </label>
      <br />

      <button type="submit">criar</button>
    </form>
  );
}

export default PlaylistForm;