import { createContext, useState, useEffect, type ReactNode } from 'react'

export type DisplayMode = 'normal' | 'ugly' | 'y2k'

export interface DisplayModeContextType {
    mode: DisplayMode
    setMode: (mode: DisplayMode) => void
    cycleMode: () => void
}

export const DisplayModeContext = createContext<DisplayModeContextType | undefined>(undefined)

export function DisplayModeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<DisplayMode>(() => {
        const saved = localStorage.getItem('display-mode')
        if (saved === 'ugly' || saved === 'y2k' || saved === 'normal') {
            return saved
        }
        return 'normal'
    })

    useEffect(() => {
        localStorage.setItem('display-mode', mode)
    }, [mode])

    const cycleMode = () => {
        setMode((prevMode) => {
            if (prevMode === 'normal') return 'ugly'
            if (prevMode === 'ugly') return 'y2k'
            return 'normal'
        })
    }

    return (
        <DisplayModeContext.Provider value={{ mode, setMode, cycleMode }}>
            {children}
        </DisplayModeContext.Provider>
    )
}