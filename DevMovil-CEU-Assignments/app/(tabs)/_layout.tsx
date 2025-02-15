import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Portada',
          tabBarIcon: ({ color }) => <Ionicons name="code-working" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ejercicio1"
        options={{
          title: 'Ejercicio 1',
          tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ejercicio2"
        options={{
          title: 'Ejercicio 2',
          tabBarIcon: ({ color }) => <Ionicons name="keypad" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ejercicio3"
        options={{
          title: 'Ejercicio 3',
          tabBarIcon: ({ color }) => <Ionicons name="time" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ejercicio4"
        options={{
          title: 'Ejercicio 4',
          tabBarIcon: ({ color }) => <Ionicons name="reload-circle-sharp" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
