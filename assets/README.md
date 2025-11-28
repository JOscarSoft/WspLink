# WspLink Assets

This directory contains the app's assets including icons and splash screens.

## Required Assets

For a production build, you'll need to add the following files:

- `icon.png` - App icon (1024x1024px)
- `splash.png` - Splash screen image
- `adaptive-icon.png` - Android adaptive icon (1024x1024px)
- `favicon.png` - Web favicon (48x48px or larger)

## Generating Assets

You can use Expo's asset generation tools:

```bash
npx expo-optimize
```

Or create your own assets and place them in this directory.

## Temporary Note

The app will run without these assets, but you'll see warnings. The functionality will work perfectly fine for development and testing.
