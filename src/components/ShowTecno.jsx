import { Tooltip, Typography } from '@mui/material'
import React from 'react'
import { TecnoData } from '../constants/TecnoData'

function ShowTecno({name="Tecno",data}) {
    console.log(TecnoData);
    
  return (
    <>
    <Typography variant='h5' sx={{
        color:"white", fontWeight:"bold",marginBottom:1,marginTop:1
    }}>
            {name}
        </Typography>
    <div className='flex flex-wrap gap-4 text-white'>
        
        {
            data?.map(({name,img})=>(
                <ImageList img={img} name={name} key={img+
                    name
                }/>
                // <div>hj</div>
            ))
        }
    </div>
    </>
  )
}

const ImageList=({name,img})=>{
    return (
        <Tooltip title={name} placement="top-start">
        <img src={img} alt="" className='w-[50px] h-[50px] object-cover' />
    </Tooltip>
    )
}
export default ShowTecno