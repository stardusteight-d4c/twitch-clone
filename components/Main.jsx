import React from 'react'
import Categories from './Categories'
import Hero from './Hero'
import IconBar from './IconBar'
import LiveChannels from './LiveChannels'

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[240px] mx-auto -z-10">
      <Hero />
      <LiveChannels />
      <IconBar />
      <Categories />
    </div>
  )
}

export default Main
