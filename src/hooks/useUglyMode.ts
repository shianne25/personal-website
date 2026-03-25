import { useContext } from 'react'
import { UglyModeContext } from '../context/UglyModeContext'

interface UglyModeContextType {
    isUgly: boolean
    toggleUgly: () => void
}

export function useUglyMode(): UglyModeContextType {
    const context = useContext(UglyModeContext)
    if (!context) {
        throw new Error('useUglyMode must be used within UglyModeProvider')
    }
    return context as UglyModeContextType
}
