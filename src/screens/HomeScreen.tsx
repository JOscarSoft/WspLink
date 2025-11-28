import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Country, HistoryEntry } from '../types';
import { getDefaultCountry } from '../data/countries';
import { CountrySelector } from '../components/CountrySelector';
import { PhoneInput } from '../components/PhoneInput';
import { HistoryList } from '../components/HistoryList';
import { useTheme } from '../contexts/ThemeContext';
import { openWhatsApp } from '../utils/whatsapp';
import { saveHistoryEntry, getHistory, deleteHistoryEntry } from '../utils/storage';

type Props = DrawerScreenProps<any, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [selectedCountry, setSelectedCountry] = useState<Country>(getDefaultCountry());
    const [phoneNumber, setPhoneNumber] = useState('');
    const [history, setHistory] = useState<HistoryEntry[]>([]);

    useEffect(() => {
        loadHistory();
    }, []);

    const loadHistory = async () => {
        const savedHistory = await getHistory();
        setHistory(savedHistory);
    };

    const handleOpenWhatsApp = async () => {
        if (!phoneNumber || phoneNumber.length < 5) {
            Alert.alert(t('errors.invalidPhone'));
            return;
        }

        const success = await openWhatsApp(selectedCountry.dialCode, phoneNumber);

        if (success) {
            // Save to history
            const entry: HistoryEntry = {
                id: Date.now().toString(),
                country: selectedCountry,
                phoneNumber,
                timestamp: Date.now(),
            };
            await saveHistoryEntry(entry);
            await loadHistory();
        } else {
            Alert.alert(t('errors.cannotOpen'));
        }
    };

    const handleSelectHistoryEntry = (country: Country, phone: string) => {
        setSelectedCountry(country);
        setPhoneNumber(phone);
    };

    const handleDeleteHistoryEntry = async (id: string) => {
        await deleteHistoryEntry(id);
        await loadHistory();
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Text style={[styles.menuIcon, { color: theme.colors.text }]}>☰</Text>
                    </TouchableOpacity>
                    <Text style={[styles.title, { color: theme.colors.text }]}>
                        {t('home.title')}
                    </Text>
                </View>

                <View style={styles.formSection}>
                    <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
                        {t('home.selectCountry')}
                    </Text>
                    <CountrySelector
                        selectedCountry={selectedCountry}
                        onSelect={setSelectedCountry}
                    />

                    <Text style={[styles.label, { color: theme.colors.textSecondary }]}>
                        {t('home.phoneNumber')}
                    </Text>
                    <PhoneInput value={phoneNumber} onChangeText={setPhoneNumber} />

                    <TouchableOpacity
                        style={[
                            styles.openButton,
                            { backgroundColor: theme.colors.primary },
                            (!phoneNumber || phoneNumber.length < 5) && styles.openButtonDisabled,
                        ]}
                        onPress={handleOpenWhatsApp}
                        disabled={!phoneNumber || phoneNumber.length < 5}
                    >
                        <Text style={styles.openButtonText}>{t('home.openWhatsApp')}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.historySection}>
                    <Text style={[styles.historyTitle, { color: theme.colors.text }]}>
                        {t('home.history')}
                    </Text>
                    <HistoryList
                        history={history}
                        onSelectEntry={handleSelectHistoryEntry}
                        onDeleteEntry={handleDeleteHistoryEntry}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 24,
    },
    menuButton: {
        marginRight: 16,
        padding: 8,
    },
    menuIcon: {
        fontSize: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
    },
    formSection: {
        marginBottom: 32,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    openButton: {
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 8,
    },
    openButtonDisabled: {
        opacity: 0.5,
    },
    openButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    historySection: {
        flex: 1,
    },
    historyTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
