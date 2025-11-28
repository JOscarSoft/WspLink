import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

interface PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChangeText }) => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    const handleChange = (text: string) => {
        // Only allow numeric characters
        const numericText = text.replace(/[^0-9]/g, '');
        onChangeText(numericText);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[
                    styles.input,
                    {
                        backgroundColor: theme.colors.card,
                        color: theme.colors.text,
                        borderColor: theme.colors.border,
                    },
                ]}
                placeholder={t('home.phoneNumberPlaceholder')}
                placeholderTextColor={theme.colors.textSecondary}
                value={value}
                onChangeText={handleChange}
                keyboardType="phone-pad"
                maxLength={15}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        fontSize: 18,
        fontWeight: '500',
    },
});
