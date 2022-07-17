import React from 'react'
import CategoriesItem from './CategoriesItem'
import category1 from '../public/assets/categorie1.jpg'

const Categories = () => {
  return (
    <div id="categories" className="p-2 md:p-8">
      <h2 className="px-2 text-xl font-bold">
        <span className="text-[#9147ff]">Categorias</span> que talvez você goste
      </h2>
      {/* Container */}
      <div className="grid grid-cols-2 gap-2 py-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10">
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
                <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
        />
        <CategoriesItem
          img={category1}
          title="Valorant"
          viewers="38k"
          tag1="FPS"
          tag2="Shooter"
        />
      </div>
    </div>
  )
}

export default Categories
