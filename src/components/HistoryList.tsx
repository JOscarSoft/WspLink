import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { HistoryEntry, Country } from '../types';
import { useTheme } from '../contexts/ThemeContext';
import { historyListStyles as styles } from './styles/HistoryList.styles';

interface HistoryListProps {
    history: HistoryEntry[];
    onSelectEntry: (country: Country, phoneNumber: string) => void;
    onDeleteEntry: (id: string) => void;
}

export const HistoryList: React.FC<HistoryListProps> = ({
    history,
    onSelectEntry,
    onDeleteEntry,
}) => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(history.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentHistory = history.slice(startIndex, endIndex);

    const handleDelete = (id: string) => {
        Alert.alert(
            t('common.confirm'),
            t('home.deleteEntry'),
            [
                { text: t('common.cancel'), style: 'cancel' },
                {
                    text: t('common.delete'),
                    style: 'destructive',
                    onPress: () => onDeleteEntry(id),
                },
            ]
        );
    };

    const formatDate = (timestamp: number): string => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return t('common.justNow');
        if (diffMins < 60) return t('common.minutesAgo', { count: diffMins });
        if (diffHours < 24) return t('common.hoursAgo', { count: diffHours });
        if (diffDays < 7) return t('common.daysAgo', { count: diffDays });

        return date.toLocaleDateString();
    };

    if (history.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
                    {t('home.noHistory')}
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={currentHistory}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.historyItem, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                        onPress={() => onSelectEntry(item.country, item.phoneNumber)}
                        onLongPress={() => handleDelete(item.id)}
                    >
                        <View style={styles.historyContent}>
                            <Text style={styles.flag}>{item.country.flag}</Text>
                            <View style={styles.historyInfo}>
                                <Text style={[styles.phoneNumber, { color: theme.colors.text }]}>
                                    {item.country.dialCode} {item.phoneNumber}
                                </Text>
                                <Text style={[styles.timestamp, { color: theme.colors.textSecondary }]}>
                                    {formatDate(item.timestamp)}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.deleteButton}
                            onPress={() => handleDelete(item.id)}
                        >
                            <Text style={[styles.deleteText, { color: theme.colors.error }]}>×</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />

            {totalPages > 1 && (
                <View style={styles.pagination}>
                    <TouchableOpacity
                        style={[
                            styles.pageButton,
                            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
                        ]}
                        onPress={() => setCurrentPage(Math.max(0, currentPage - 1))}
                        disabled={currentPage === 0}
                    >
                        <Text
                            style={[
                                styles.pageButtonText,
                                { color: currentPage === 0 ? theme.colors.textSecondary : theme.colors.primary },
                            ]}
                        >
                            ←
                        </Text>
                    </TouchableOpacity>

                    <Text style={[styles.pageInfo, { color: theme.colors.text }]}>
                        {currentPage + 1} / {totalPages}
                    </Text>

                    <TouchableOpacity
                        style={[
                            styles.pageButton,
                            { backgroundColor: theme.colors.card, borderColor: theme.colors.border },
                        ]}
                        onPress={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <Text
                            style={[
                                styles.pageButtonText,
                                {
                                    color:
                                        currentPage === totalPages - 1
                                            ? theme.colors.textSecondary
                                            : theme.colors.primary,
                                },
                            ]}
                        >
                            →
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};


