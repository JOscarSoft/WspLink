# WspLink - WhatsApp Link Generator

A React Native mobile application built with Expo that generates WhatsApp links to start conversations with phone numbers.

## Features

- 🌍 **Country Code Selector**: Select from a comprehensive list of countries with search functionality
- 📱 **Phone Number Input**: Easy-to-use numeric input with validation
- 💬 **WhatsApp Integration**: Generate and open WhatsApp links directly
- 📜 **History Tracking**: View and manage recent contacts with pagination (5 entries per page)
- 🎨 **Dark Mode**: Full dark mode support with automatic system preference detection
- 🌐 **Multi-language**: English and Spanish translations
- ⚙️ **Settings**: Customize language and theme preferences

## Default Configuration

- **Default Country**: Dominican Republic (+1)
- **Default Language**: English
- **Default Theme**: System preference

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for testing on physical device)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (Android)
   - Scan the QR code with Camera app (iOS)

Or run on emulator:
```bash
npm run android  # For Android emulator
npm run ios      # For iOS simulator (macOS only)
```

## Project Structure

```
WspLink/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── CountrySelector.tsx
│   │   ├── PhoneInput.tsx
│   │   └── HistoryList.tsx
│   ├── contexts/         # React contexts
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/            # Static data
│   │   └── countries.ts
│   ├── i18n/            # Internationalization
│   │   ├── index.ts
│   │   └── locales/
│   │       ├── en.json
│   │       └── es.json
│   ├── navigation/      # Navigation setup
│   │   └── AppNavigator.tsx
│   ├── screens/         # Screen components
│   │   ├── HomeScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── styles/          # Theme and styles
│   │   └── theme.ts
│   ├── types/           # TypeScript types
│   │   └── index.ts
│   └── utils/           # Utility functions
│       ├── storage.ts
│       └── whatsapp.ts
├── assets/              # App assets
├── App.tsx             # Main app entry point
└── package.json        # Dependencies

```

## How It Works

1. **Select Country**: Choose a country from the list to get the correct dial code
2. **Enter Phone Number**: Type the phone number (numbers only)
3. **Open WhatsApp**: Tap the button to generate and open the WhatsApp link
4. **History**: Previously used numbers are saved locally and displayed with pagination

## WhatsApp Link Format

The app generates links in the format:
```
https://api.whatsapp.com/send?phone={countryCode}{phoneNumber}
```

Example: `https://api.whatsapp.com/send?phone=19578965412`

## Technologies Used

- **React Native**: Mobile app framework
- **Expo**: Development platform
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation library with drawer menu
- **AsyncStorage**: Local data persistence
- **i18next**: Internationalization framework

## Version

1.0.0

## License

MIT
