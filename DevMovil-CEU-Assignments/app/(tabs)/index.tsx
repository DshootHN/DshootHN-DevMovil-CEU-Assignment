import { StyleSheet, Button, Text, Image, Platform, View, TextInput, TouchableOpacity, Alert } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {

  return (
    <View style={styles.container}>
                <TouchableOpacity>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/CEUTEC_HONDURAS.png' }} // Cambia por la URL de tu imagen
            style={styles.image}
            resizeMode='contain'
          />
          </TouchableOpacity>
      <View style={styles.header}>
          <Ionicons style={styles.headerIcon} name="code-working" size={32} color="#fff" />
          <Text style={styles.headerTextTime}>Tarea # 2</Text>
          <Text style={styles.headerText}>Programacion Móvil</Text>
          <Text style={styles.headerText}>Denis Dávila - 32051192</Text>
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
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },
  image: {
    width: 400, 
    height: 200,
    borderRadius: 100, 
  },
  button: {
    marginTop: 10,
    backgroundColor: '#FFD700',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  }
})