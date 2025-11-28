import { StyleSheet } from 'react-native';

export const countrySelectorStyles = StyleSheet.create({
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
