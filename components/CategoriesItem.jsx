import Image from 'next/image'
import React from 'react'

const CategoriesItem = ({ img, title, viewers, tag1, tag2 }) => {
  return (
    <div className="p-2 duration-300 ease-in hover:cursor-pointer hover:scale-105">
      <Image src={img} width="261px" height="350px" alt="/" />
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-gray-500 py-[2px]">{viewers}K viewers</p>
        <div className="flex">
          <div>
            <p className="text-xs bg-gray-700 rounded-full inline-block p-[2px] px-3 mr-2">
              {tag1}
            </p>
          </div>
          <div>
            {tag2 ? (
              <p className="text-xs bg-gray-700 rounded-full inline-block p-[2px] px-3">
                {tag2}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesItem
