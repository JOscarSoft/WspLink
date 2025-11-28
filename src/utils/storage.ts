import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryEntry, Settings, Theme, Language } from '../types';

const HISTORY_KEY = '@wsplink_history';
const SETTINGS_KEY = '@wsplink_settings';
const MAX_HISTORY = 100;

// History Management
export const saveHistoryEntry = async (entry: HistoryEntry): Promise<void> => {
    try {
        const existingHistory = await getHistory();
        const newHistory = [entry, ...existingHistory].slice(0, MAX_HISTORY);
        await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (error) {
        console.error('Error saving history:', error);
    }
};

export const getHistory = async (): Promise<HistoryEntry[]> => {
    try {
        const history = await AsyncStorage.getItem(HISTORY_KEY);
        return history ? JSON.parse(history) : [];
    } catch (error) {
        console.error('Error getting history:', error);
        return [];
    }
};

export const deleteHistoryEntry = async (id: string): Promise<void> => {
    try {
        const history = await getHistory();
        const newHistory = history.filter((entry) => entry.id !== id);
        await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    } catch (error) {
        console.error('Error deleting history entry:', error);
    }
};

export const clearHistory = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem(HISTORY_KEY);
    } catch (error) {
        console.error('Error clearing history:', error);
    }
};

// Settings Management
export const saveSettings = async (settings: Settings): Promise<void> => {
    try {
        await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
        console.error('Error saving settings:', error);
    }
};

export const getSettings = async (): Promise<Settings | null> => {
    try {
        const settings = await AsyncStorage.getItem(SETTINGS_KEY);
        return settings ? JSON.parse(settings) : null;
    } catch (error) {
        console.error('Error getting settings:', error);
        return null;
    }
};

export const saveTheme = async (theme: Theme): Promise<void> => {
    try {
        const settings = (await getSettings()) || { theme: 'light', language: 'en' };
        await saveSettings({ ...settings, theme });
    } catch (error) {
        console.error('Error saving theme:', error);
    }
};

export const saveLanguage = async (language: Language): Promise<void> => {
    try {
        const settings = (await getSettings()) || { theme: 'light', language: 'en' };
        await saveSettings({ ...settings, language });
    } catch (error) {
        console.error('Error saving language:', error);
    }
};
