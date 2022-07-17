import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { BsPerson, BsSearch, BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import Logo from '../public/assets/logo.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px]">
      {/* Left Side */}
      <div className="flex grow items-center justify-start">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="/"
              width="36px"
              height="36px"
              className="cursor-pointer z-10"
            />
          </a>
        </Link>
        <p className="p-4">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left">
            <div className="flex">
              <Menu.Button>
                <BsThreeDotsVertical size={20} />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* Middle */}
      <div className="hidden md:flex grow-[2] items-center justify-center">
        <div className="bg-gray-800 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 px-4 rounded-full">
          <div>
            <input
              type="text"
              className="bg-transparent border-none text-white focus:outline-none"
              placeholder="Buscar"
            />
          </div>
          <div>
            <BsSearch />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="hidden md:flex grow items-center justify-end">
        <div className="flex items-center">
          <Link href="/">
            <button className="px-4 py-[6px] rounded-full font-bold bg-[#3F00E1] mr-2">
              Conta
            </button>
          </Link>
          <BsPerson size={30} />
        </div>
      </div>

      {/* Hamburguer Menu */}
      <div onClick={handleNav} className="block md:hidden z-10 cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className="text-center">
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Ao Vivo</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Categorias</Link>
          </li>
          <li className="p-4 text-3xl font-bold">
            <Link href="/">Conta</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
