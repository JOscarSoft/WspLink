export interface Country {
    name: string;
    dialCode: string;
    code: string;
    flag: string;
}

export interface HistoryEntry {
    id: string;
    country: Country;
    phoneNumber: string;
    timestamp: number;
}

export type Theme = 'light' | 'dark';

export type Language = 'en' | 'es';

export interface Settings {
    theme: Theme;
    language: Language;
}
