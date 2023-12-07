import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export default function Card(props) {

    let path = `/playlists/${props.id}`;

  return (
    <Link to={path}>
        <div id='card'>
            <img id='img-card' src={props.img} alt='imagem'></img>
            <h2 id='name-card'>{props.name}</h2>
        </div>
    </Link>
    )
}