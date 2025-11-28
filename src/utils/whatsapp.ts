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
        const canOpen = await Linking.canOpenURL(url);

        if (canOpen) {
            await Linking.openURL(url);
            return true;
        } else {
            console.error('Cannot open WhatsApp URL');
            return false;
        }
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        return false;
    }
};
