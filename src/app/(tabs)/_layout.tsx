import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { colors } from '../../constants/colors';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.primary,

                tabBarStyle: {
                    height: 78,
                    backgroundColor: '#AFC99F',
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowOpacity: 0,
                    paddingTop: 12,
                    paddingBottom: 12,
                },

                tabBarItemStyle: {
                    height: 48,
                    marginHorizontal: 8,
                    borderRadius: 14,
                    overflow: 'hidden',
                },

                tabBarActiveBackgroundColor: '#FFFFFF',

                tabBarIconStyle: {
                    width: 32,
                    height: 32,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{ href: null }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Menú',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="home"
                            size={35}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="shopping_cart"
                options={{
                    title: 'Potted Plant',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="local-florist" // Cambiado para eliminar el cuadro rígido de 'yard'
                            size={35}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="map"
                options={{
                    title: 'Map',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="map"
                            size={35}
                            color={colors.primary}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: () => (
                        <MaterialIcons
                            name="person"
                            size={35}
                            color={colors.primary}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}