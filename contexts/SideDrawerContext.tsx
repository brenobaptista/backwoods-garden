import { createContext } from 'react'

interface ISideDrawerContext {
  isSideDrawerOpen: boolean
  setIsSideDrawerOpen(isOpen: boolean): void
}

const SideDrawerContext = createContext<ISideDrawerContext>({
  isSideDrawerOpen: false,
  setIsSideDrawerOpen: () => null
})

export default SideDrawerContext
