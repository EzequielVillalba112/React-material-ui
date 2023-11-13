import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ContainerSx from './ContainerSx/ContainerSx'
import Typography from './Typography/Typography'
import App from '../App'
import Header from './Header/Header'


export default function Page() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Header/>}/>
            <Route path='/container-sx' element={<ContainerSx/>}/>
            <Route path='/typografy' element={<Typography/>}/>
        </Routes>
    </>
  )
}
