import { useState } from 'react'

import Hamburger from './icons/Hamburger'
import Leaf from './icons/Leaf'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='fixed w-full shadow-md flex flex-wrap items-center justify-between px-2 py-3 bg-white z-10'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <div className='flex justify-start space-x-2 text-base lg:text-lg font-bold leading-relaxed mr-4 py-2 whitespace-nowrap'>
              <Leaf width={22} height={26} />
              <span>Jardim Caipira</span>
            </div>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-2 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger width={20} height={20} />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              isOpen ? 'flex' : 'hidden'
            }`}
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs lg:text-sm uppercase font-bold leading-snug hover:opacity-75'
                  href='#produtos'
                  onClick={() => setIsOpen(false)}
                >
                  Produtos
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs lg:text-sm uppercase font-bold leading-snug hover:opacity-75'
                  href='#avaliacoes'
                  onClick={() => setIsOpen(false)}
                >
                  Avaliações
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='px-3 py-2 flex items-center text-xs lg:text-sm uppercase font-bold leading-snug hover:opacity-75'
                  href='#videos'
                  onClick={() => setIsOpen(false)}
                >
                  Vídeos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
