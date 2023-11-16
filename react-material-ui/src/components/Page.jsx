import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ContainerSx from './ContainerSx/ContainerSx'
import TypographyMaterial from './Typography/TypographyMaterial'
import BoxMaterial from './Box/BoxMaterial'
import GridMaterial from './Grid/GridMaterial'

export default function Page() {
  return (
    <>
        <Routes>
            <Route path='/' element={<ContainerSx/>}/>
            <Route path='/container-sx' element={<ContainerSx/>}/>
            <Route path='/typografy' element={<TypographyMaterial/>}/>
            <Route path='/box' element={<BoxMaterial/>}/>
            <Route path='/grid' element={<GridMaterial/>}/>
        </Routes>
    </>
  )
}
