import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    FlatList,
    TextInput,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Country } from '../types';
import { countries } from '../data/countries';
import { useTheme } from '../contexts/ThemeContext';

interface CountrySelectorProps {
    selectedCountry: Country;
    onSelect: (country: Country) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
    selectedCountry,
    onSelect,
}) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCountries = countries.filter(
        (country) =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            country.dialCode.includes(searchQuery)
    );

    const handleSelect = (country: Country) => {
        onSelect(country);
        setModalVisible(false);
        setSearchQuery('');
    };

    return (
        <View>
            <TouchableOpacity
                style={[styles.selector, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={[styles.flag, { fontSize: 32 }]}>{selectedCountry.flag}</Text>
                <View style={styles.countryInfo}>
                    <Text style={[styles.countryName, { color: theme.colors.text }]}>
                        {selectedCountry.name}
                    </Text>
                    <Text style={[styles.dialCode, { color: theme.colors.textSecondary }]}>
                        {selectedCountry.dialCode}
                    </Text>
                </View>
                <Text style={[styles.arrow, { color: theme.colors.textSecondary }]}>▼</Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <SafeAreaView style={[styles.modalContainer, { backgroundColor: theme.colors.background }]}>
                    <View style={[styles.modalHeader, { borderBottomColor: theme.colors.border }]}>
                        <Text style={[styles.modalTitle, { color: theme.colors.text }]}>
                            {t('countrySelector.title')}
                        </Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={[styles.doneButton, { color: theme.colors.primary }]}>
                                {t('common.done')}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={[styles.searchInput, {
                            backgroundColor: theme.colors.inputBackground,
                            color: theme.colors.text,
                            borderColor: theme.colors.border
                        }]}
                        placeholder={t('countrySelector.search')}
                        placeholderTextColor={theme.colors.textSecondary}
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />

                    <FlatList
                        data={filteredCountries}
                        keyExtractor={(item) => item.code}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.countryItem, { borderBottomColor: theme.colors.border }]}
                                onPress={() => handleSelect(item)}
                            >
                                <Text style={styles.countryFlag}>{item.flag}</Text>
                                <Text style={[styles.countryItemName, { color: theme.colors.text }]}>
                                    {item.name}
                                </Text>
                                <Text style={[styles.countryItemCode, { color: theme.colors.textSecondary }]}>
                                    {item.dialCode}
                                </Text>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={
                            <Text style={[styles.noResults, { color: theme.colors.textSecondary }]}>
                                {t('countrySelector.noResults')}
                            </Text>
                        }
                    />
                </SafeAreaView>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    selector: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 16,
    },
    flag: {
        marginRight: 12,
    },
    countryInfo: {
        flex: 1,
    },
    countryName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    dialCode: {
        fontSize: 14,
    },
    arrow: {
        fontSize: 12,
    },
    modalContainer: {
        flex: 1,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    doneButton: {
        fontSize: 16,
        fontWeight: '600',
    },
    searchInput: {
        margin: 16,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        fontSize: 16,
    },
    countryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
    },
    countryFlag: {
        fontSize: 28,
        marginRight: 12,
    },
    countryItemName: {
        flex: 1,
        fontSize: 16,
    },
    countryItemCode: {
        fontSize: 14,
    },
    noResults: {
        textAlign: 'center',
        marginTop: 32,
        fontSize: 16,
    },
});
