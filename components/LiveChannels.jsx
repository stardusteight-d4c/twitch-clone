import React from 'react'
import { live_channels } from '../data/mock-data'
import LiveChannelItem from './LiveChannelItem'

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="px-2 text-xl font-bold">
        <span className="text-[#9147ff]">Canais</span> que talvez você goste
      </h2>
      {/* Container */}
      <div className="grid gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        {live_channels.map((item, index) => (
          <LiveChannelItem
            key={index}
            img={item.img}
            profile_img={item.profile_img}
            title={item.title}
            user={item.user}
            game={item.game}
          />
        ))}
      </div>
    </div>
  )
}

export default LiveChannels
