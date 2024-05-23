import { createContext } from 'react'

export const CurrentModalContext = createContext<{
  dismiss: () => void
}>(null as any)
