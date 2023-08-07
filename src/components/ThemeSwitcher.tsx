import { useState, useEffect } from 'react'

import { Moon, Sun } from './icons'

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    if (
      localStorage.darkMode === 'true' ||
      (!('darkMode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    localStorage.darkMode = darkMode

    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('style', 'color-scheme: dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('style', 'color-scheme: light')
    }
  }, [darkMode])

  return (
    <button
      aria-label='Alternar modo escuro'
      type='button'
      className='h-10 w-10 rounded p-2'
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <Moon width={24} height={24} />
      ) : (
        <Sun width={24} height={24} />
      )}
    </button>
  )
}

export default ThemeSwitcher
