import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../../context/themeContext';

export default function ThemeToggleButton() {
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <Pressable
            onPress={toggleTheme}
            style={[styles.button, { backgroundColor: theme.colors.surface }]}
        >
            <Ionicons 
                name={isDark ? "sunny" : "moon"} 
                size={24} 
                color={theme.colors.textPrimary} 
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});