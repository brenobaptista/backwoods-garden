'use client'

import { useState, useContext, createContext, ReactNode } from 'react'

import { Hamburger, Leaf } from '@/icons'
import ThemeSwitcher from '@/components/ThemeSwitcher'

const Header = () => {
  const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false)

  return (
    <div className='mt-14'>
      <SideDrawerContext.Provider
        value={{ isSideDrawerOpen, setIsSideDrawerOpen }}
      >
        <Toolbar />
        <SideDrawer />
      </SideDrawerContext.Provider>
    </div>
  )
}

interface ISideDrawerContext {
  isSideDrawerOpen: boolean
  setIsSideDrawerOpen(isOpen: boolean): void
}

const SideDrawerContext = createContext<ISideDrawerContext>({
  isSideDrawerOpen: false,
  setIsSideDrawerOpen: () => null
})

const Toolbar = () => (
  <header className='fixed left-0 top-0 z-10 h-14 w-full bg-white px-4 shadow-xl dark:bg-gray-800'>
    <div className='container mx-auto flex h-full items-center justify-between'>
      <MenuMobile />
      <Logo className='mx-3' />
      <MenuDesktop />
    </div>
  </header>
)

const MenuMobile = () => {
  const { setIsSideDrawerOpen } = useContext(SideDrawerContext)

  return (
    <div className='flex gap-2 whitespace-nowrap sm:hidden'>
      <button
        aria-label='Alternar barra de navegação'
        type='button'
        className='h-10 w-10 rounded p-2'
        onClick={() => setIsSideDrawerOpen(true)}
      >
        <Hamburger width={24} height={20} />
      </button>
      <ThemeSwitcher className='h-10 w-10 rounded p-2 hover:opacity-75' />
    </div>
  )
}

const MenuDesktop = () => (
  <div className='hidden sm:block'>
    <div className='flex h-full flex-col sm:flex-row sm:items-center sm:gap-8 lg:gap-16'>
      <ThemeSwitcher className='h-10 w-10 rounded p-2 hover:opacity-75' />
      <NavBlock />
    </div>
  </div>
)

const SideDrawer = () => {
  const { isSideDrawerOpen } = useContext(SideDrawerContext)

  return (
    <>
      {isSideDrawerOpen && <Backdrop />}
      <div
        className={`fixed left-0 top-0 z-30 h-full w-72 max-w-[70%] bg-white px-4 py-8 transition-transform duration-300 ease-out dark:bg-gray-800 sm:hidden ${
          !isSideDrawerOpen && '-translate-x-full'
        }`}
      >
        <Logo className='mb-8' />
        <NavBlock />
      </div>
    </>
  )
}

const Backdrop = () => {
  const { setIsSideDrawerOpen } = useContext(SideDrawerContext)

  return (
    <div
      className='fixed left-0 top-0 z-20 h-full w-full bg-black/50 backdrop-blur-sm'
      onClick={() => setIsSideDrawerOpen(false)}
      role='button'
      tabIndex={0}
      aria-label='backdrop'
    />
  )
}

interface ILogo {
  className?: string
}

const Logo = ({ className }: ILogo) => {
  const { setIsSideDrawerOpen } = useContext(SideDrawerContext)

  return (
    <a
      className='hover:opacity-75'
      href='#'
      onClick={() => setIsSideDrawerOpen(false)}
    >
      <div
        className={`${className} flex justify-center space-x-2 whitespace-nowrap py-2 text-base font-bold lg:text-lg`}
      >
        <Leaf width={22} height={26} />
        <span>Jardim Caipira</span>
      </div>
    </a>
  )
}

const NavBlock = () => (
  <nav>
    <ul className='m-0 flex list-none flex-col items-center p-0 text-sm font-medium uppercase sm:flex-row'>
      <NavLink href='#produtos'>Produtos</NavLink>
      <NavLink href='#avaliacoes'>Avaliações</NavLink>
      <NavLink href='#videos'>Vídeos</NavLink>
    </ul>
  </nav>
)

interface INavLink {
  href: string
  children: ReactNode
}

const NavLink = ({ href, children }: INavLink) => {
  const { setIsSideDrawerOpen } = useContext(SideDrawerContext)

  return (
    <li className='m-0 h-full w-full'>
      <a
        className='flex h-full items-center p-3 hover:opacity-75'
        href={href}
        onClick={() => setIsSideDrawerOpen(false)}
      >
        {children}
      </a>
    </li>
  )
}

export default Header
