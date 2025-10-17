import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { light, dark } from '../styles/theme';
import { Theme, ThemeContextType } from '../types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        loadSavedTheme()
    }, [])

    const loadSavedTheme = async (): Promise<void> => {
        try {
            const savedTheme = await AsyncStorage.getItem('theme')
            if(savedTheme) {
                setIsDark(savedTheme === 'dark')
            }
        } catch (error) {
            console.log('Error loading theme:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const toggleTheme = async (): Promise<void> => {
        const newTheme = !isDark
        setIsDark(newTheme)
        
        try {
            await AsyncStorage.setItem('theme', newTheme ? 'dark' : 'light')
        } catch (e) {
            console.log('Error saving theme:', e);
            
        }
    }

    const theme: Theme = isDark ? dark : light
    
    const contextValue: ThemeContextType = {
        theme,
        isDark,
        toggleTheme,
        isLoading,
    }

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context;
}