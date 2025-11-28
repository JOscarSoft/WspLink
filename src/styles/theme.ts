export interface ThemeColors {
    primary: string;
    background: string;
    card: string;
    text: string;
    textSecondary: string;
    border: string;
    notification: string;
    error: string;
    success: string;
    inputBackground: string;
    shadow: string;
}

export interface AppTheme {
    dark: boolean;
    colors: ThemeColors;
}

export const lightTheme: AppTheme = {
    dark: false,
    colors: {
        primary: '#25D366',
        background: '#F5F5F5',
        card: '#FFFFFF',
        text: '#000000',
        textSecondary: '#666666',
        border: '#E0E0E0',
        notification: '#FF3B30',
        error: '#FF3B30',
        success: '#25D366',
        inputBackground: '#FFFFFF',
        shadow: '#000000',
    },
};

export const darkTheme: AppTheme = {
    dark: true,
    colors: {
        primary: '#25D366',
        background: '#0B141A',
        card: '#1F2C34',
        text: '#E9EDEF',
        textSecondary: '#8696A0',
        border: '#2A3942',
        notification: '#FF453A',
        error: '#FF453A',
        success: '#25D366',
        inputBackground: '#1F2C34',
        shadow: '#000000',
    },
};
