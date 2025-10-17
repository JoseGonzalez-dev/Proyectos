import { useTheme } from "../context/themeContext"
import { createStyles } from "../styles/globalStyles"

export const useGlobalStyles = () => {
    const { theme } = useTheme()
    return createStyles(theme)
}