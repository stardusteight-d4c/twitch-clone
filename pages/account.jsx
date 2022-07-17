/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import Image from 'next/image'

const account = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mx-auto py-8">
          Boas vindas, {session.user.name}!
        </h2>
        <div className="mx-auto pb-4 rounded-full">
          <Image
            src={session.user.image}
            width="100px"
            height="100px"
            alt="/"
            className="rounded-full"
          />
        </div>
        <button className="flex items-center justify-center p-3 rounded-[4px] bg-gray-900 border border-[#3F00E1]" onClick={() => signOut()}>
          Sair
        </button>
      </div>
    )
  }
  return (
    <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
      <h2 className="text-3xl font-bold">Entrar</h2>
      <p className="py-4">Escolha uma conta para se registrar</p>
      <button
        className="flex items-center justify-center p-3 bg-black rounded-[4px] border border-[#3F00E1] my-2"
        onClick={() => signIn()}
      >
        <FaGithub size={25} className="mr-2" />
        Entrar com<span className="font-bold pl-1">Github</span>
      </button>
      <button
        className="flex items-center justify-center p-3 bg-white text-black rounded-[4px] border border-white my-2"
        onClick={() => signIn()}
      >
        <FaGoogle size={25} className="mr-2" />
        Entrar com<span className="font-bold pl-1">Google</span>
      </button>
    </div>
  )
}

export default account
