import { StyleSheet } from 'react-native';

export const historyListStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyContainer: {
        padding: 32,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
    },
    historyItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom: 8,
        borderRadius: 12,
        borderWidth: 1,
    },
    historyContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    flag: {
        fontSize: 28,
        marginRight: 12,
    },
    historyInfo: {
        flex: 1,
    },
    phoneNumber: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    timestamp: {
        fontSize: 12,
    },
    deleteButton: {
        padding: 8,
    },
    deleteText: {
        fontSize: 28,
        fontWeight: '300',
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
        gap: 16,
    },
    pageButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    pageButtonText: {
        fontSize: 20,
        fontWeight: '600',
    },
    pageInfo: {
        fontSize: 16,
        fontWeight: '500',
    },
});
