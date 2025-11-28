import { StyleSheet } from 'react-native';

export const settingsScreenStyles = StyleSheet.create({
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
