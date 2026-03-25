import { createContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface UglyModeContextType {
    isUgly: boolean
    toggleUgly: () => void
}

export const UglyModeContext = createContext<UglyModeContextType | undefined>(undefined)

export function UglyModeProvider({ children }: { children: ReactNode }) {
    const [isUgly, setIsUgly] = useState(() => {
        // Load from localStorage on initial render
        const saved = localStorage.getItem('ugly-mode')
        return saved ? JSON.parse(saved) : false
    })

    // Save to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('ugly-mode', JSON.stringify(isUgly))
    }, [isUgly])

    const toggleUgly = () => {
        setIsUgly((prev: boolean) => !prev)
    }

    return (
        <UglyModeContext.Provider value={{ isUgly, toggleUgly }}>
            {children}
        </UglyModeContext.Provider>
    )
}
