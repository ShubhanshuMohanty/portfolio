import React from 'react'
import ShowTecno from './ShowTecno'
import { flData, TecnoData, toolsData } from '../constants/TecnoData'

const Tecno = () => {
  return (
    <div>
        <ShowTecno name='Languages' data={TecnoData}/>
        <ShowTecno name='Framework/Libraries' data={flData}/>
        <ShowTecno name='Tools' data={toolsData}/>
    </div>
  )
}

export default Tecno