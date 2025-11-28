import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';
import { settingsScreenStyles as styles } from './styles/SettingsScreen.styles';

type Props = DrawerScreenProps<any, 'Settings'>;

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme, isDark, toggleTheme } = useTheme();
    const { language, setLanguage } = useLanguage();

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[styles.backIcon, { color: theme.colors.primary }]}>←</Text>
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: theme.colors.text }]}>
                        {t('settings.title')}
                    </Text>
                </View>

                <View style={styles.content}>
                    {/* Language Section */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                            {t('settings.language')}
                        </Text>
                        <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                            <TouchableOpacity
                                style={[
                                    styles.languageOption,
                                    language === 'en' && { backgroundColor: theme.colors.primary + '20' },
                                ]}
                                onPress={() => handleLanguageChange('en')}
                            >
                                <Text
                                    style={[
                                        styles.languageText,
                                        { color: language === 'en' ? theme.colors.primary : theme.colors.text },
                                    ]}
                                >
                                    🇺🇸 {t('settings.english')}
                                </Text>
                                {language === 'en' && (
                                    <Text style={[styles.checkmark, { color: theme.colors.primary }]}>✓</Text>
                                )}
                            </TouchableOpacity>

                            <View style={[styles.divider, { backgroundColor: theme.colors.border }]} />

                            <TouchableOpacity
                                style={[
                                    styles.languageOption,
                                    language === 'es' && { backgroundColor: theme.colors.primary + '20' },
                                ]}
                                onPress={() => handleLanguageChange('es')}
                            >
                                <Text
                                    style={[
                                        styles.languageText,
                                        { color: language === 'es' ? theme.colors.primary : theme.colors.text },
                                    ]}
                                >
                                    🇪🇸 {t('settings.spanish')}
                                </Text>
                                {language === 'es' && (
                                    <Text style={[styles.checkmark, { color: theme.colors.primary }]}>✓</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Dark Mode Section */}
                    <View style={styles.section}>
                        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
                            {t('settings.darkMode')}
                        </Text>
                        <View style={[styles.card, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}>
                            <View style={styles.settingRow}>
                                <Text style={[styles.settingLabel, { color: theme.colors.text }]}>
                                    {isDark ? '🌙' : '☀️'} {t('settings.darkMode')}
                                </Text>
                                <Switch
                                    value={isDark}
                                    onValueChange={toggleTheme}
                                    trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
                                    thumbColor="#FFFFFF"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Version Section */}
                    <View style={styles.versionSection}>
                        <Text style={[styles.versionLabel, { color: theme.colors.textSecondary }]}>
                            {t('settings.version')}
                        </Text>
                        <Text style={[styles.versionText, { color: theme.colors.text }]}>
                            1.0.0
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


