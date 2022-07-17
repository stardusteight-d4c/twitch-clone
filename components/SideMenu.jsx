import Image from 'next/image'
import React from 'react'
import { RiMovieLine } from 'react-icons/ri'
import { BsDot } from 'react-icons/bs'
import { rec_channels, top_channels } from '../data/mock-data'

const SideMenu = () => {
  return (
    <div className="fixed w-14 sm:w-16 xl:w-[240px] h-screen p-2 bg-[#0e0e10] -z-10 overflow-y-scroll">
      <div>
        <p className="hidden pb-4 text-sm font-bold uppercase xl:flex">
          Canais Recomendados
        </p>
        <p>
          <RiMovieLine size={20} className="justify-center w-full xl:hidden" />
        </p>
      </div>
      {rec_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div className='mr-2'>
            <Image
              src={item.avatar_url}
              width="40px"
              height="40px"
              alt={item.username}
              className="rounded-full"
            />
          </div>
          <div className="justify-between hidden w-full xl:flex">
            <div>
              <p className="font-semibold">{item.username}</p>
              <p className="text-xs text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot color="red" size={40} />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
      <div>
        <p className="hidden py-4 text-sm font-bold uppercase xl:flex">
          Canais Relevantes
        </p>
        <p>
          <RiMovieLine size={20} className="justify-center w-full xl:hidden" />
        </p>
      </div>
      {top_channels.map((item, index) => (
        <div key={index} className="inline-flex items-center w-full py-[2px]">
          <div>
            <Image
              src={item.avatar_url}
              width="50px"
              height="50px"
              alt={item.username}
              className="rounded-full"
            />
          </div>
          <div className="justify-between hidden w-full xl:flex">
            <div>
              <p>{item.username}</p>
              <p className="text-gray-400">{item.game_name}</p>
            </div>
            <p className="flex items-center">
              <BsDot color="red" size={40} />
              {item.rank}K
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideMenu
