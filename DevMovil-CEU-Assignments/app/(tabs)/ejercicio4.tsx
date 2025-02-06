import { StyleSheet, Button, Text, Image, Platform, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const tiempo  = setTimeout(() => {
      setLoad(false)
    }, 3000);

    return () => clearTimeout(tiempo);
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Ionicons style={styles.headerIcon} name="reload-circle-sharp" size={32} color="#fff" />
          <Text style={styles.headerText}>Estado de Carga</Text>
          {load ? (
              <>
                <ActivityIndicator size="large" color="#FFD700" />
                <Text style={styles.headerText}>Cargando...</Text>
              </>
            ) : (
                <Text style={styles.headerTextTime}>¡ Bienvenido a la Aplicación !</Text>
            )
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFFF',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
  },
  header: {
      width: '100%',
      backgroundColor: '#364FC7',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
  },
  headerIcon: {
      marginBottom: 10,
  },
  headerText: {
      color: "#fff",
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10
  },
  headerTextTime: {
    color: "#FFD700",
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
})