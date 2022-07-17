import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="p-2">
      <Image src={img} alt="channel" />
      <div className="flex pt-2">
        <div className="pr-2">
          <Image
            src={profile_img}
            width="60px"
            height="60px"
            className="rounded-full"
            alt="profile"
          />
        </div>
        <div>
          <p className='text-sm font-bold'>{title}</p>
          <p className='text-sm text-gray-500'>{user}</p>
          <p className='text-sm text-gray-500'>{game}</p>
        </div>
      </div>
    </div>
  )
}

export default LiveChannelItem
