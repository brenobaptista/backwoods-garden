import { useState, useEffect, useRef } from 'react'

import Hamburger from './icons/Hamburger'
import Leaf from './icons/Leaf'
import Theme from './Theme'

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = event => {
      const insideToggle = toggleRef.current?.contains(event.target)
      const insideMenu = menuRef.current?.contains(event.target)

      if (!(insideToggle || insideMenu)) {
        setIsOpen(false)
      }
    }

    window.addEventListener('click', handleClick)

    return () => window.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <nav className='fixed w-full shadow-xl px-8 py-3 bg-white dark:bg-gray-800 z-10'>
        <div className='container mx-auto flex flex-wrap justify-between'>
          <div className='flex justify-between w-full lg:w-auto lg:space-x-96'>
            <div className='flex space-x-2 text-base lg:text-lg font-bold py-2 whitespace-nowrap'>
              <Leaf width={22} height={26} />
              <span>Jardim Caipira</span>
            </div>
            <Theme />
            <button
              aria-label='Toggle navigation buttons'
              type='button'
              className='lg:hidden w-10 h-10 p-2 rounded bg-gray-100 dark:bg-gray-900'
              onClick={() => setIsOpen(!isOpen)}
              ref={toggleRef}
            >
              <Hamburger width={24} height={20} />
            </button>
          </div>
          <div
            className={`lg:flex items-center ${isOpen ? 'flex' : 'hidden'}`}
            ref={menuRef}
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto text-xs lg:text-sm uppercase font-bold leading-snug'>
              <li>
                <a
                  className='px-3 py-2 flex items-center hover:opacity-75'
                  href='#produtos'
                  onClick={() => setIsOpen(false)}
                >
                  Produtos
                </a>
              </li>
              <li>
                <a
                  className='px-3 py-2 flex items-center hover:opacity-75'
                  href='#avaliacoes'
                  onClick={() => setIsOpen(false)}
                >
                  Avaliações
                </a>
              </li>
              <li>
                <a
                  className='px-3 py-2 flex items-center hover:opacity-75'
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
