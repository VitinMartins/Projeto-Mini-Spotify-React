import React from 'react'
import Faq from './components/Faq/FAQ'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Registro from './components/Register/Registro'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import CardContainer from './components/CardContainer/CardContainer'
import CardDetail from './components/CardDetail/CardDetail'
import NewPlaylist from './components/NewPlaylist/NewPlaylist'
import { useState } from 'react'


export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <>
    <NavBar authenticated = {authenticated}/>

    <Routes>
        <Route path='/' element={<CardContainer/>}></Route>
        <Route path='/register' element={<Registro/>}></Route>
        <Route path='/login' element={<Login setAuthenticated={setAuthenticated}/>}/>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/playlists/:id' element={<CardDetail/>}></Route>
        <Route path='/playlists/add' element={<NewPlaylist/>}></Route>
    </Routes>
    
    <Footer></Footer>
    </>
  )
}
