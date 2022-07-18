import Image from 'next/image'
import React from 'react'

const LiveChannelItem = ({ img, profile_img, title, user, game }) => {
  return (
    <div className="relative p-2 duration-300 ease-in hover:cursor-pointer hover:scale-105">
      <Image src={img} alt="channel" width="350px" height="200px" />
      <div className="absolute p-[4px] space-x-2 rounded-md text-xs font-bold bg-[#eb0400] top-5 left-5">
        LIVE
      </div>
      <div className="flex pt-2">
        <div className="pr-2 max-w-[50px]">
          <Image
            src={profile_img}
            width="60px"
            height="60px"
            className="rounded-full"
            alt="profile"
          />
        </div>
        <div>
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm text-gray-500">{user}</p>
          <p className="text-sm text-gray-500">{game}</p>
        </div>
      </div>
    </div>
  )
}

export default LiveChannelItem
