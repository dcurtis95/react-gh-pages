import React from 'react'
import ReactPlayer from 'react-player'
import "./responsiveplayer.scss"

const ResponsivePlayer = () => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://soundcloud.com/a-fluffy-sheep/tracks'
          width='100%'
          height='445px'
          SameSite='Strict'
        />
      </div>
    )
}

export default ResponsivePlayer
