# Installation Guide

## Quick Start

Follow these steps to get WspLink running on your machine:

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- Expo SDK
- React Navigation
- AsyncStorage
- i18next
- And all other dependencies

### 2. Start the Development Server

```bash
npm start
```

This will start the Expo development server and show a QR code.

### 3. Run on Your Device

**Option A: Physical Device**
1. Install "Expo Go" app from App Store (iOS) or Play Store (Android)
2. Scan the QR code shown in the terminal
3. The app will load on your device

**Option B: Emulator**
```bash
# For Android emulator (requires Android Studio)
npm run android

# For iOS simulator (requires Xcode, macOS only)
npm run ios

# For web browser (for quick testing)
npm run web
```

## Troubleshooting

### If npm install fails:
- Make sure you have Node.js installed (v14 or higher)
- Try clearing npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### If the app doesn't start:
- Make sure no other process is using port 19000
- Try running: `npx expo start --clear`

### If you see asset warnings:
- The app will work fine without custom assets
- Asset files are optional for development/testing
- See `assets/README.md` for information about adding custom icons

## Next Steps

Once the app is running:
1. Test the country selector (Dominican Republic should be default)
2. Enter a phone number and tap "Open WhatsApp"
3. Check the history section
4. Open the hamburger menu and explore settings
5. Try dark mode and language switching

Enjoy using WspLink! 🚀
