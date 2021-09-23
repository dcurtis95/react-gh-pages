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
          height='100%'
        />
      </div>
    )
}

export default ResponsivePlayer
