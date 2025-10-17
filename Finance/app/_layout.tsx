import { Stack } from "expo-router"
import { ThemeProvider } from "../src/context/themeContext"

export default function Layout() {
    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    )
}