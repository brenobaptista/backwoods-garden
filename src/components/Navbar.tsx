import { useState } from 'react'

import Hamburger from './icons/Hamburger'
import Leaf from './icons/Leaf'
import Theme from './Theme'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className='fixed w-full shadow-xl flex flex-wrap items-center justify-between px-2 py-3 bg-white dark:bg-gray-800 z-10'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full flex justify-between lg:w-auto lg:space-x-20'>
            <div className='flex justify-start space-x-2 text-base lg:text-lg font-bold leading-relaxed mr-4 py-2 whitespace-nowrap'>
              <Leaf width={22} height={26} />
              <span>Jardim Caipira</span>
            </div>
            <Theme />
            <button
              aria-label='Toggle navigation buttons'
              type='button'
              className='lg:hidden w-10 h-10 p-2 rounded bg-gray-100 dark:bg-gray-900'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Hamburger width={24} height={20} />
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              isOpen ? 'flex' : 'hidden'
            }`}
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
