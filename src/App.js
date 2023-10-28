import React from 'react'
import Faq from './components/Faq/FAQ'
import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'
import Registro from './components/Register/Registro'
import Footer from './components/Footer/Footer'
import {Routes, Route} from 'react-router-dom'
import CardContainer from './components/CardContainer/CardContainer'
import CardDetail from './components/CardDetail/CardDetail'
import './App.css'


export default function App() {
  return (
    <>
    <NavBar/>

    <Routes>
        <Route path='/' element={<CardContainer/>}></Route>
        <Route path='/register' element={<Registro/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/faq' element={<Faq/>}></Route>
        <Route path='/playlists/:name' element={<CardDetail/>}></Route>
    </Routes>
    
    <Footer></Footer>
    </>
  )
}
