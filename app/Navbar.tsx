'use client'

import { useState, useEffect, useRef } from 'react'

import { Hamburger, Leaf } from '@/icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Navbar = () => {
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
      <nav className='fixed z-10 w-full bg-white px-8 py-3 shadow-xl dark:bg-gray-800'>
        <div className='container mx-auto flex flex-wrap justify-between'>
          <div className='flex w-full justify-between lg:w-auto lg:space-x-96'>
            <Logo />
            <div className='flex items-center gap-2 sm:gap-8 '>
              <div className='lg:hidden'>
                <ThemeSwitcher className='h-10 w-10 rounded p-2' />
              </div>
              <button
                aria-label='Alternar barra de navegação'
                type='button'
                className='h-10 w-10 rounded p-2 lg:hidden'
                onClick={() => setIsOpen(!isOpen)}
                ref={toggleRef}
              >
                <Hamburger width={24} height={20} />
              </button>
            </div>
          </div>
          <div className='flex items-center gap-16'>
            <div className='hidden lg:block'>
              <ThemeSwitcher className='h-10 w-10 rounded p-2' />
            </div>
            <div
              className={`items-center lg:flex ${isOpen ? 'flex' : 'hidden'}`}
              ref={menuRef}
            >
              <ul className='flex list-none flex-col text-xs font-bold uppercase leading-snug lg:ml-auto lg:flex-row lg:text-sm'>
                <li>
                  <a
                    className='flex items-center px-3 py-2 hover:opacity-75'
                    href='#produtos'
                    onClick={() => setIsOpen(false)}
                  >
                    Produtos
                  </a>
                </li>
                <li>
                  <a
                    className='flex items-center px-3 py-2 hover:opacity-75'
                    href='#avaliacoes'
                    onClick={() => setIsOpen(false)}
                  >
                    Avaliações
                  </a>
                </li>
                <li>
                  <a
                    className='flex items-center px-3 py-2 hover:opacity-75'
                    href='#videos'
                    onClick={() => setIsOpen(false)}
                  >
                    Vídeos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

const Logo = () => (
  <div className='flex space-x-2 whitespace-nowrap py-2 text-base font-bold lg:text-lg'>
    <Leaf width={22} height={26} />
    <span>Jardim Caipira</span>
  </div>
)

export default Navbar
