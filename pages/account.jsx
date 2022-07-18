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
        <h2 className="py-8 mx-auto text-2xl font-bold">
          Boas vindas, {session.user.name}!
        </h2>
        <div className="pb-4 mx-auto rounded-full">
          <Image
            src={session.user.image}
            width="100px"
            height="100px"
            alt="/"
            className="rounded-full"
          />
        </div>
        <button
          className="flex items-center justify-center p-3 rounded-full bg-black border border-[#9147ff]"
          onClick={() => signOut()}
        >
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
        className="flex items-center justify-center p-3 bg-black rounded-[4px] border border-[#9147ff] my-2"
        onClick={() => signIn()}
      >
        <FaGithub size={25} className="mr-2" />
        Entrar com<span className="pl-1 font-bold">Github</span>
      </button>
      <button
        className="flex items-center justify-center p-3 bg-white text-black rounded-[4px] border border-white my-2"
        onClick={() => signIn()}
      >
        <FaGoogle size={25} className="mr-2" />
        Entrar com<span className="pl-1 font-bold">Google</span>
      </button>
    </div>
  )
}

export default account
