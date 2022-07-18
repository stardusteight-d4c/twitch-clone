import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useSession, signIn, signOut } from 'next-auth/react'

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

  const { data: session } = useSession()
  // console.log(session)

  return (
    <nav className="fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px]">
      {/* Left Side */}
      <div className="flex items-center justify-start grow">
        <Link href="/">
          <a className="flex">
            <Image
              src={Logo}
              alt="/"
              width="36px"
              height="36px"
              className="z-10 cursor-pointer"
            />
          </a>
        </Link>
        <p className="p-4 font-bold hover:cursor-pointer">Browse</p>
        <div className="p-4">
          <Menu as="div" className="relative text-left ">
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
                        Configurações
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
                        Suporte
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
                        Licença
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
      <div className="hidden md:flex grow-[2] items-center justify-center cursor-text">
        <div className="bg-gray-800 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 px-4 rounded-full">
          <div>
            <input
              type="text"
              className="text-white bg-transparent border-none focus:outline-none"
              placeholder="Buscar"
            />
          </div>
          <div className="px-2 cursor-pointer">
            <BsSearch className="font-bold" />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="items-center justify-end hidden md:flex grow">
        {session ? (
          <div className="flex items-center">
            <Link href="/account">
              <div>
                <p className="pr-4 cursor-pointer">
                  Olá,{' '}
                  <span className="text-[#9147ff] font-semibold">
                    {session.user.name}
                  </span>
                </p>
              </div>
            </Link>
            <Menu as="div" className="relative text-left">
              <div className="flex">
                <Menu.Button>
                  <Image
                    src={session.user.image}
                    width="45px"
                    height="45px"
                    alt="Profile"
                    className="rounded-full"
                  />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      <Link href="/account">
                        <p className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-500 hover:text-gray-100 hover:cursor-pointer">
                          Conta
                        </p>
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <p
                        onClick={() => signOut()}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-500 hover:text-gray-100 hover:cursor-pointer"
                      >
                        Sair
                      </p>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/account">
              <button className="px-4 py-[6px] rounded-full font-bold bg-[#9147ff] mr-2">
                Conta
              </button>
            </Link>
            <BsPerson size={30} />
          </div>
        )}
      </div>

      {/* Hamburguer Menu */}
      <div onClick={handleNav} className="z-10 block cursor-pointer md:hidden">
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
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#live">Ao Vivo</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/#categories">Categorias</Link>
          </li>
          <li onClick={() => setNav(false)} className="p-4 text-3xl font-bold">
            <Link href="/account">Conta</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
