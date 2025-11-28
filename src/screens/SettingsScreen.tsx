import React from 'react';
import {
    View,
    Text,
    StyleSheet,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        paddingTop: 26,
    },
    backButton: {
        marginRight: 16,
        padding: 8,
    },
    backIcon: {
        fontSize: 28,
        fontWeight: '600',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    card: {
        borderRadius: 12,
        borderWidth: 1,
        overflow: 'hidden',
    },
    languageOption: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    languageText: {
        fontSize: 18,
        fontWeight: '500',
    },
    checkmark: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
    },
    settingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    settingLabel: {
        fontSize: 18,
        fontWeight: '500',
    },
    versionSection: {
        alignItems: 'center',
        marginTop: 32,
        paddingTop: 32,
    },
    versionLabel: {
        fontSize: 14,
        marginBottom: 4,
    },
    versionText: {
        fontSize: 16,
        fontWeight: '600',
    },
});
