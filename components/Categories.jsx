import React from 'react'
import { categories } from '../data/mock-data'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="px-2 text-xl font-bold">
        <span className="text-[#9147ff]">Categorias</span> que talvez você goste
      </h2>
      {/* Container */}
      <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((item, index) => (
          <CategoriesItem
            key={index}
            img={item.img}
            title={item.title}
            viewers={item.viewers}
            tag1={item.tag1}
            tag2={item.tag2}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
