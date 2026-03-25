import { useContext } from 'react'
import { DisplayModeContext, type DisplayMode } from '../context/DisplayModeContext'

export function useDisplayMode(): {
    mode: DisplayMode
    setMode: (mode: DisplayMode) => void
    cycleMode: () => void
} {
    const context = useContext(DisplayModeContext)
    if (!context) {
        throw new Error('useDisplayMode must be used within DisplayModeProvider')
    }
    return context
}
