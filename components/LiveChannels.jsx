import React from 'react'
import LiveChannelItem from './LiveChannelItem'
import Live1 from '../public/assets/live/live1.jpeg'
import Live2 from '../public/assets/live/live2.jpeg'
import Live3 from '../public/assets/live/live3.jpeg'
import Live4 from '../public/assets/live/live4.jpeg'
import Live5 from '../public/assets/live/live5.jpeg'
import Live6 from '../public/assets/live/live6.jpeg'
import Live7 from '../public/assets/live/live7.jpeg'
import Live8 from '../public/assets/live/live8.jpeg'
import Live9 from '../public/assets/live/live9.jpeg'
import Live10 from '../public/assets/live/live10.jpeg'

const LiveChannels = () => {
  return (
    <div id="live" className="p-2 md:p-8">
      <h2 className="px-2 text-xl font-bold">
        <span className="text-[#9147ff]">Canais</span> que talvez você goste
      </h2>
      {/* Container */}
      <div className="grid gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5">
        <LiveChannelItem
          img={Live1}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live2}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live3}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live4}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live5}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live6}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live7}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live8}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live9}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
        <LiveChannelItem
          img={Live10}
          profile_img="https://avatars.githubusercontent.com/u/87643260?v=4"
          title="CHARITY STREAM! Any support is ap..."
          user="Natt"
          game="Valorant"
        />
      </div>
    </div>
  )
}

export default LiveChannels
