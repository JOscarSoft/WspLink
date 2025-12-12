import { Linking } from 'react-native';

export const generateWhatsAppLink = (
    countryCode: string,
    phoneNumber: string
): string => {
    // Remove any non-numeric characters from phone number
    const cleanNumber = phoneNumber.replace(/\D/g, '');
    // Remove + from country code if present
    const cleanCountryCode = countryCode.replace('+', '').replace(/\D/g, '');

    return `https://api.whatsapp.com/send?phone=${cleanCountryCode}${cleanNumber}`;
};

export const openWhatsApp = async (
    countryCode: string,
    phoneNumber: string
): Promise<boolean> => {
    try {
        const url = generateWhatsAppLink(countryCode, phoneNumber);

        // Try to check if URL can be opened
        // Note: In production Android builds, canOpenURL may return false
        // even if WhatsApp is installed due to Android 11+ query restrictions
        try {
            const canOpen = await Linking.canOpenURL(url);
            if (canOpen) {
                await Linking.openURL(url);
                return true;
            }
        } catch (canOpenError) {
            console.log('canOpenURL check failed, attempting to open anyway');
        }

        // Fallback: Try to open the URL directly
        // This will work if WhatsApp is installed, even if canOpenURL returned false
        await Linking.openURL(url);
        return true;
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        return false;
    }
};
