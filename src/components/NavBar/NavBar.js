import React, { useState } from 'react'
import spotifyImage from '../../assets/spotifyImage.png'
import {Link, useNavigate} from 'react-router-dom'
import './NavBar.css'
import axios from 'axios'

export default function NavBar({authenticated}) {

    const navigate = useNavigate()

const handleLogout = (e) => {
    const userId = localStorage.getItem('userId')
    if(userId) {
        axios.get('http://localhost:3001/users')
        .then(res => {
            localStorage.clear()
            window.location.reload()
        })
        .catch(err => console.log(err))
    } 
       
}
    
  return (
    <nav className='nav'>
        <Link to='/'><img src={spotifyImage} alt='logoSpotify'></img></Link>
        <ul>
            <li>
                <Link to='/register'>Inscreva-se</Link>
            </li>
            <li>
                {authenticated ? (
                    <button className='logout-button' onClick={handleLogout}>Logout</button>
                ):(
                    <Link to='/login'>Entrar</Link>
                )}
            </li>
            <li>
                <Link to='/faq'>FAQ</Link>
            </li>
        </ul>
    </nav>
  )
}
