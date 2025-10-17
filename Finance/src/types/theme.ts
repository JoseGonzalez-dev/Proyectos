export interface colorSchema {
    // Backgrounds
  background: string;
  surface: string;
  card: string;
  
  // Text
  text: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  
  // Status colors
  income: string;
  expense: string;
  balance: string;
  
  // Background variants
  incomeBackground: string;
  expenseBackground: string;
  balanceBackground: string;
  
  // Interactive
  primary: string;
  primaryLight: string;
  
  // Borders
  border: string;
  borderLight: string;
  
  // Status
  success: string;
  warning: string;
  error: string;
  info: string;
}

export interface Typography {
    h1: {
        fontSize: number;
        fontWeight: "bold" | "normal";
    };
    h2: {
        fontSize: number;
        fontWeight: "bold" | "normal";
    };
    body: {
        fontSize: number;
        fontWeight: "normal";
    };
    caption: {
        fontSize: number;
        fontWeight: "normal";
    };
}

export interface Spacing {
    xs: number;
    small: number;
    medium: number;
    large: number;
    xl: number;
}

export interface Theme {
    colors: colorSchema;
    typography: Typography;
    spacing: Spacing;
}

export interface ThemeContextType {
    theme: Theme
    isDark: boolean
    toggleTheme: () => Promise<void>
    isLoading: boolean
}