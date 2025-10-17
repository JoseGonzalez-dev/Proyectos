import { Theme } from "../types/theme"

const typography = {
    h1: {
        fontSize: 24,
        fontWeight: "bold" as const
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold" as const
    },
    body: {
        fontSize: 16,
        fontWeight: "normal" as const
    },
    caption: {
        fontSize: 14,
        fontWeight: "normal" as const
    }
};

const spacing = {
    xs: 4,
    small: 8,
    medium: 16,
    large: 24,
    xl: 32
}

export const light: Theme = {
    colors: {
    // Backgrounds
    background: '#f9fafb',
    surface: '#F8F9FA',
    card: '#FFFFFF',
    
    // Text
    text: '#1F2937',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    
    // Status colors
    income: '#059669',
    expense: '#DC2626',
    balance: '#1F2937',
    
    // Background variants
    incomeBackground: '#E8F5E8',
    expenseBackground: '#FEE2E2',
    balanceBackground: '#F3F4F6',
    
    // Interactive
    primary: '#3B82F6',
    primaryLight: '#EBF4FF',
    
    // Borders
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    
    // Status
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  typography,
  spacing,
}

export const dark: Theme = {
    colors: {
    // Backgrounds
    background: '#111827',
    surface: '#1F2937',
    card: '#374151',
    
    // Text
    text: '#F9FAFB',
    textPrimary: '#F9FAFB',
    textSecondary: '#D1D5DB',
    textTertiary: '#9CA3AF',
    
    // Status colors
    income: '#10B981',
    expense: '#F87171',
    balance: '#F9FAFB',
    
    // Background variants
    incomeBackground: '#064E3B',
    expenseBackground: '#7F1D1D',
    balanceBackground: '#374151',
    
    // Interactive
    primary: '#60A5FA',
    primaryLight: '#1E3A8A',
    
    // Borders
    border: '#4B5563',
    borderLight: '#374151',
    
    // Status
    success: '#10B981',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA',
  },
  typography,
  spacing,
}