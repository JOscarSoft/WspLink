import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Theme } from '../types';
import { lightTheme, darkTheme, AppTheme } from '../styles/theme';
import { getSettings, saveTheme } from '../utils/storage';

interface ThemeContextType {
    theme: AppTheme;
    isDark: boolean;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const systemColorScheme = useColorScheme();
    const [themeMode, setThemeMode] = useState<Theme>('light');

    useEffect(() => {
        loadTheme();
    }, []);

    const loadTheme = async () => {
        const settings = await getSettings();
        if (settings?.theme) {
            setThemeMode(settings.theme);
        } else {
            // Use system preference if no saved theme
            setThemeMode(systemColorScheme === 'dark' ? 'dark' : 'light');
        }
    };

    const toggleTheme = async () => {
        const newTheme: Theme = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(newTheme);
        await saveTheme(newTheme);
    };

    const setTheme = async (theme: Theme) => {
        setThemeMode(theme);
        await saveTheme(theme);
    };

    const theme = themeMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDark: themeMode === 'dark',
                toggleTheme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};
