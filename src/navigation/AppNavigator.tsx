import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../contexts/ThemeContext';

import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

export const AppNavigator: React.FC = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: theme.colors.background,
                },
                drawerActiveTintColor: theme.colors.primary,
                drawerInactiveTintColor: theme.colors.textSecondary,
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: '600',
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel: t('home.title'),
                    drawerIcon: ({ color }) => <Text style={{ fontSize: 20 }}>🏠</Text>,
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerLabel: t('settings.title'),
                    drawerIcon: ({ color }) => <Text style={{ fontSize: 20 }}>⚙️</Text>,
                }}
            />
        </Drawer.Navigator>
    );
};
