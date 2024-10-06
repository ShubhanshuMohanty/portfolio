import { Avatar, Tooltip } from '@mui/material'
import React from 'react'
import { Link } from '../style/StyleComponents'
import { socialData } from '../constants/SocialData'

function SocialList({divW="w-1/3"}) {
  return (
    <div className={`flex flex-row justify-between ${divW} `}>
        {
            socialData?.map(({name,img,link})=>(
                <SocialAvatar name={name} link={link} img={img} key={img}/>
            ))
        }
    </div>
  )
}

const SocialAvatar=({name,img,link})=>{
    return(
        <Tooltip title={name} placement="top-start">
            <a href={link}>
                <Avatar src={img}/>
            </a>
        </Tooltip>
    )
}
export default SocialList